﻿using GHM.WebsiteClient.Api.Domain.Constants;
using System.Collections.Generic;

namespace GHM.WebsiteClient.Api.Domain.ModelMetas
{
    public class AlbumMeta
    {
        public string TenantId { get; set; }
        public string UserId { get; set; }
        public string FullName { get; set; }
        public string Avatar { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public string Thumbnail { get; set; }
        public bool IsPublic { get; set; }
        public AlbumType Type { get; set; }
        public List<AlbumTranslationMeta> Translations { get; set; }
        public List<PhotoMeta> Photos { get; set; }
        public List<VideoMeta> Videos { get; set; }
    }
}
