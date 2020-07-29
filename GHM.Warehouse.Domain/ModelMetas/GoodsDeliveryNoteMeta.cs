using System;
using System.Collections.Generic;
using System.Text;
using GHM.Warehouse.Domain.Constants;

namespace GHM.Warehouse.Domain.ModelMetas
{
    public class GoodsDeliveryNoteMeta
    {
        public string Id { get; set; }

        public string TenantId { get; set; }

        public string WarehouseId { get; set; }

        public DateTime DeliveryDate { get; set; }

        public string Reason { get; set; }

        public GoodsDeliveryNoteType Type { get; set; }

        public string ReceiverId { get; set; }

        public string ReceiverFullName { get; set; }

        public string ReceiverPhoneNumber { get; set; }

        public int? OfficeId { get; set; }

        public string OfficeName { get; set; }

        public string Note { get; set; }

        public string ReceptionWarehouseId { get; set; }

        public string ForecatstId { get; set; }

        public string DeliveryNo { get; set; }

        public string ConcurrencyStamp { get; set; }

        public string CreatorId { get; set; }

        public string CreatorFullName { get; set; }

        public string CreatorAvatar { get; set; }

        public string LastUpdateUserId { get; set; }

        public string LastUpdateFullName { get; set; }

        public string LastUpdateUserAvatar { get; set; }

        public string SubjectId { get; set; }

        public byte Day { get; set; }

        public byte Month { get; set; }

        public int Year { get; set; }

        public string CustomerId { get; set; }

        public List<GoodsDeliveryNoteDetailMeta> GoodsDeliveryNoteDetails { get; set; }

        public GoodsDeliveryNoteMeta()
        {
            ConcurrencyStamp = Guid.NewGuid().ToString();
        }
    }
}
