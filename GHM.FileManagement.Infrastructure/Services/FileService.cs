using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using GHM.FileManagement.Domain;
using GHM.FileManagement.Domain.IRepositories;
using GHM.FileManagement.Domain.IServices;
using GHM.FileManagement.Domain.ModelMetas;
using GHM.FileManagement.Domain.Models;
using GHM.FileManagement.Domain.Resources;
using GHM.FileManagement.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using File = GHM.FileManagement.Domain.Models.File;

namespace GHM.FileManagement.Infrastructure.Services
{
    public class FileService : IFileService
    {
        private readonly IFileRepository _fileRepository;
        private readonly IFolderRepository _folderRepository;
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmFileManagementResource> _resourceService;

        public FileService(IFileRepository fileRepository, IWebHostEnvironment webHostEnvironment,
            IResourceService<SharedResource> sharedResourceService, IResourceService<GhmFileManagementResource> resourceService,
            IFolderRepository folderRepository)
        {
            _fileRepository = fileRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
            _folderRepository = folderRepository;
            _webHostEnvironment = webHostEnvironment;
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string userId, string fileId)
        {
            var result = await _fileRepository.Delete(tenantId, userId, fileId);
            return new ActionResultResponse(result,
                  result == -1 ? _resourceService.GetString("File does not exists.")
                  : result <= 0 ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                  : _resourceService.GetString("Delete file success"));
        }

        public async Task<ActionResultResponse<List<FileViewModel>>> UploadFiles(string tenantId, string creatorId, string creatorFullName, string creatorAvatar,
            int? folderId, IFormFileCollection formFileCollection)
        {
            List<File> listFiles = new List<File>();
            Folder folderInfo = null;
            if (folderId.HasValue)
            {
                folderInfo = await _folderRepository.GetInfo(tenantId, creatorId, folderId.Value, true);
                if (folderInfo == null)
                    return new ActionResultResponse<List<FileViewModel>>(-1,
                        _resourceService.GetString("Folder does not exists. You can not update file to this folder."));
            }

            foreach (IFormFile formFile in formFileCollection)
            {
                var concurrencyStamp = Guid.NewGuid().ToString();
                string uploadPath = $"{CreateFolder()}{concurrencyStamp}.{formFile.GetExtensionFile()}";

                var type = formFile.GetTypeFile();
                var isImage = type.Contains("image/");
                var resultCopyFile = await CopyFileToServer(formFile, uploadPath, concurrencyStamp, 0, 0);

                if (isImage && System.IO.File.Exists(uploadPath))
                {
                    System.IO.File.Delete(uploadPath);
                }

                string uploadPathJpeg = $"{CreateFolder()}{concurrencyStamp}Png.Png";
                if (isImage && System.IO.File.Exists(uploadPathJpeg))
                {
                    System.IO.File.Delete(uploadPathJpeg);
                }

                if (resultCopyFile == -1)
                    continue;

                var file = new File
                {
                    ConcurrencyStamp = concurrencyStamp,
                    TenantId = tenantId,
                    Name = formFile.FileName,
                    UnsignName = formFile.FileName.Trim().StripVietnameseChars().ToUpper(),
                    Type = formFile.GetTypeFile(),
                    Size = isImage ? resultCopyFile : formFile.GetFileSize(),
                    Url = isImage ? $"{CreateFolder()}{concurrencyStamp}jpeg.Jpeg" : uploadPath,
                    CreatorId = creatorId,
                    CreatorFullName = creatorFullName,
                    CreatorAvatar = creatorAvatar,
                    Extension = formFile.GetExtensionFile(),
                    FolderId = folderInfo?.Id,
                };

                // Add file info to list for insert into database.
                listFiles.Add(file);
            }

            var result = await _fileRepository.Insert(listFiles);
            if (result <= 0)
                return new ActionResultResponse<List<FileViewModel>>(result,
                    _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            return new ActionResultResponse<List<FileViewModel>>
            {
                Code = 1,
                Message = _resourceService.GetString("Upload file successful"),
                Data = listFiles.Select(x => new FileViewModel
                {
                    Id = x.Id,
                    Name = x.Name,
                    CreatorId = x.CreatorId,
                    CreatorAvatar = x.CreatorAvatar,
                    FolderId = x.FolderId,
                    CreatorFullName = x.CreatorFullName,
                    Url = x.Url,
                    ConcurrencyStamp = x.ConcurrencyStamp,
                    CreateTime = x.CreateTime,
                    Extension = x.Extension,
                    Size = x.Size,
                    Type = x.Type
                }).ToList()
            };

            string CreateFolder()
            {
                var mapPath = _webHostEnvironment.WebRootPath + string.Format("uploads/" + tenantId + "/{0:yyyy/MM/dd}/", DateTime.Now);
                if (!Directory.Exists(mapPath))
                    Directory.CreateDirectory(mapPath);

                return mapPath;
            }

            async Task<long> CopyFileToServer(IFormFile file, string uploadPath, string concurrencyStamp, int width = 0, int height = 0)
            {
                try
                {
                    if (System.IO.File.Exists(uploadPath))
                        return -1;

                    using (var stream = new FileStream(uploadPath, System.IO.FileMode.Create))
                    {
                        await file.CopyToAsync(stream);

                        var extension = file.GetExtensionFile();
                        if (extension == "png" || extension == "jpg" || extension == "jpeg" || extension == "gif")
                        {
                            try
                            {
                                using (var sourceImage = Image.FromStream(stream))
                                {
                                    //var bmPhotoPng = CropImage(sourceImage, width, height, ImageType.Png);
                                    using (MemoryStream streamPng = new MemoryStream())
                                    {
                                      //  bmPhotoPng.Save(streamPng, ImageFormat.Png);
                                        sourceImage.Save(streamPng, ImageFormat.Png);
                                        streamPng.Seek(0, SeekOrigin.Begin);

                                        string uploadPathPng = $"{CreateFolder()}{concurrencyStamp}Png.Png";

                                        using (FileStream fsPng = new FileStream(uploadPathPng, FileMode.Create, FileAccess.ReadWrite))
                                        {
                                            byte[] bytes = streamPng.ToArray();
                                            fsPng.Write(bytes, 0, bytes.Length);

                                            using (var sourceImagePng = Image.FromStream(fsPng))
                                            {
                                                //var bmPhotoJpeg = CropImage(sourceImagePng, 0, 0);
                                                using (MemoryStream streamJpeg = new MemoryStream())
                                                {
                                                    //bmPhotoJpeg.Save(streamJpeg, ImageFormat.Jpeg);
                                                    sourceImagePng.Save(streamJpeg, ImageFormat.Jpeg);
                                                    streamJpeg.Seek(0, SeekOrigin.Begin);

                                                    string uploadPathJpeg = $"{CreateFolder()}{concurrencyStamp}jpeg.Jpeg";

                                                    using (FileStream fs = new FileStream(uploadPathJpeg, FileMode.Create, FileAccess.ReadWrite))
                                                    {
                                                        byte[] bytesJpeg = streamJpeg.ToArray();
                                                        fs.Write(bytesJpeg, 0, bytesJpeg.Length);

                                                        return bytesJpeg.Length;
                                                    }
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                            catch (Exception ex)
                            {
                                return -1;
                            }
                        }

                        return 1;
                    }
                } catch(Exception e)
                {
                    throw e;
                }

            }
        }

        public async Task<ActionResultResponse> Update(string tenantId, string userId, string fileId, FileMeta fileMeta)
        {
            var fileInfo = await _fileRepository.GetInfo(tenantId, userId, fileId);
            if (fileInfo == null)
                return new ActionResultResponse(-2, _resourceService.GetString("File does not exists."));

            if (fileInfo.ConcurrencyStamp != fileMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3,
                    _resourceService.GetString("The File already updated by other people. You can not update this PatientSubject."));

            fileInfo.LastUpdate = DateTime.Now;
            fileInfo.Name = fileMeta.Name;
            fileInfo.UnsignName = fileMeta.Name.Trim().StripVietnameseChars().ToUpper();

            await _fileRepository.Update(fileInfo);
            return new ActionResultResponse(1, _resourceService.GetString("Update File successful."));
        }

        public async Task<File> GetInfo(string tenantId, string userId, string fileId, bool isReadOnly = false)
        {
            return await _fileRepository.GetInfo(tenantId, userId, fileId, isReadOnly);
        }

        public async Task<List<FileViewModel>> GetsAll(string tenantId, string userId, int? folderId)
        {
            return await _fileRepository.GetAll(tenantId, userId, folderId);
        }

        public static Image CropImage(Image sourceImage, int? width = 0, int? height = 0, ImageType? type = ImageType.Jpg)
        {
            int sourceWidth = sourceImage.Width;
            int sourceHeight = sourceImage.Height;

            if (sourceWidth < sourceHeight)
            {
                int buff = width ?? sourceWidth;
                width = height ?? sourceHeight;
                height = buff;
            }

            int sourceX = 0, sourceY = 0, destX = 0, destY = 0;
            float nPercent = 0, nPercentW = 0, nPercentH = 0;

            nPercentW = width > 0 ? ((float)width / (float)sourceWidth) : 1;
            nPercentH = height > 0 ? ((float)height / (float)sourceHeight) : 1;
            if (nPercentH < nPercentW)
            {
                nPercent = nPercentH;
                destX = Convert.ToInt16((width -
                          (sourceWidth * nPercent)) / 2);
            }
            else
            {
                nPercent = nPercentW;
                destY = Convert.ToInt16((height -
                          (sourceHeight * nPercent)) / 2);
            }

            int destWidth = (int)(sourceWidth * nPercent);
            int destHeight = (int)(sourceHeight * nPercent);
            // sourceImage.Mutate(i => i.Crop(new Rectangle(sourceX, sourceY, sourceWidth, sourceHeight)).Resize(destWidth, destHeight));
            return sourceImage;
        }


    }
}
