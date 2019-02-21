using System.ComponentModel.DataAnnotations;

namespace GHM.Core.Domain.Models
{
    public class Ethnic
    {
        /// <summary>
        /// Mã dân tộc.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Tên dân tộc.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Tên không dấu tìm kiếm.
        /// </summary>
        public string UnsignName { get; set; }

        /// <summary>
        /// Mã nhóm.
        /// </summary>
        public int GroupId { get; set; }

        /// <summary>
        /// Tên nhóm.
        /// </summary>
        public string GroupName { get; set; }
        public string LanguageId { get;set; }
    }

}
