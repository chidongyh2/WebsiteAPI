using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
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
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Hosting.Internal;
using Microsoft.AspNetCore.Http;
using File = GHM.FileManagement.Domain.Models.File;

namespace GHM.FileManagement.Infrastructure.Services
{
    public class FileService : IFileService
    {
        private readonly IFileRepository _fileRepository;
        private readonly IFolderRepository _folderRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmFileManagementResource> _resourceService;

        public FileService(IFileRepository fileRepository,
            IResourceService<SharedResource> sharedResourceService, IResourceService<GhmFileManagementResource> resourceService,
            IFolderRepository folderRepository)
        {
            _fileRepository = fileRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
            _folderRepository = folderRepository;
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
                string uploadPath1 = $"{CreateFolder()}{concurrencyStamp}1.Jpeg";

                var type = formFile.GetTypeFile();
                var isImage = type.Contains("image/");
                var resultCopyFile = await CopyFileToServer(formFile, uploadPath, isImage, uploadPath1);

                if (isImage)
                {
                    try
                    {
                        System.IO.File.Delete(uploadPath);
                    }
                    catch (Exception ex)
                    {

                    }
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
                    Size = resultCopyFile,
                    Url = isImage ? uploadPath1 : uploadPath,
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
                IHostingEnvironment hostingEnvironment = new HostingEnvironment();
                var mapPath = hostingEnvironment.WebRootPath + string.Format("uploads/" + tenantId + "/{0:yyyy/MM/dd}/", DateTime.Now);
                if (!Directory.Exists(mapPath))
                    Directory.CreateDirectory(mapPath);

                return mapPath;
            }

            async Task<long> CopyFileToServer(IFormFile file, string uploadPath, bool isImage = false, string uploadPath1 = "")
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
                                int sourceWidth = sourceImage.Width;
                                int sourceHeight = sourceImage.Height;
                                int newWidth = sourceImage.Width;
                                int newHeight = sourceImage.Height;

                                if (sourceWidth < sourceHeight)
                                {
                                    int buff = newWidth;
                                    newWidth = newHeight;
                                    newHeight = buff;
                                }

                                int sourceX = 0, sourceY = 0, destX = 0, destY = 0;
                                float nPercent = 0, nPercentW = 0, nPercentH = 0;

                                nPercentW = ((float)newWidth / (float)sourceWidth);
                                nPercentH = ((float)newHeight / (float)sourceHeight);
                                if (nPercentH < nPercentW)
                                {
                                    nPercent = nPercentH;
                                    destX = Convert.ToInt16((newWidth -
                                              (sourceWidth * nPercent)) / 2);
                                }
                                else
                                {
                                    nPercent = nPercentW;
                                    destY = Convert.ToInt16((newHeight -
                                              (sourceHeight * nPercent)) / 2);
                                }

                                int destWidth = (int)(sourceWidth * nPercent);
                                int destHeight = (int)(sourceHeight * nPercent);

                                Bitmap bmPhoto = new Bitmap(newWidth, newHeight);

                                bmPhoto.SetResolution(sourceImage.HorizontalResolution,
                                         sourceImage.VerticalResolution);

                                Graphics grPhoto = Graphics.FromImage(bmPhoto);

                                grPhoto.CompositingQuality = CompositingQuality.AssumeLinear;
                                grPhoto.InterpolationMode = InterpolationMode.Low;
                                grPhoto.CompositingMode = CompositingMode.SourceCopy;

                                grPhoto.DrawImage(sourceImage,
                                     new Rectangle(destX - 1, destY - 1, destWidth + 1, destHeight + 1),
                                     new Rectangle(sourceX, sourceY, sourceWidth, sourceHeight),
                                     GraphicsUnit.Pixel);

                                grPhoto.Dispose();

                                using (MemoryStream ms1 = new MemoryStream())
                                {
                                    bmPhoto.Save(ms1, ImageFormat.Jpeg);
                                    ms1.Seek(0, SeekOrigin.Begin);

                                    using (FileStream fs = new FileStream(uploadPath1, FileMode.Create, FileAccess.ReadWrite))
                                    {
                                        byte[] bytes = ms1.ToArray();
                                        fs.Write(bytes, 0, bytes.Length);

                                        // Xóa file cũ                                       
                                        return bytes.Length;
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

    }
}
