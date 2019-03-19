using System.Collections.Generic;
using GHM.Infrastructure.Models;

namespace GHM.Warehouse.Domain.ModelMetas
{
    public class ProductAttributeMeta
    {
        public string AttributeId { get; set; }
        public string AttributeName { get; set; }
        public string Value { get; set; }
        public IEnumerable<Suggestion<string>> AttributeValues { get; set; }
        public bool IsShowClient { get; set; }
    }
}
