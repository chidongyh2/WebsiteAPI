using System.Threading.Tasks;
using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.Constants;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using Microsoft.Extensions.Logging;

namespace GHM.WebsiteClient.Api.Infrastructure.Services
{
    public class AlbumService : IAlbumService
    {
        private readonly string _connectionString;
        private readonly ILogger<AlbumService> _logger;
        public AlbumService(string connectionString, ILogger<AlbumService> logger)
        {
            _connectionString = connectionString;
            _logger = logger;
        }
        public Task<SearchResult<AlbumWithItemViewModel>> SearchAlbumWithItem(string tenantId, string languageId, AlbumType type, int page, int pageSize)
        {
            throw new System.NotImplementedException();
        }
    }
}
