namespace GHM.Warehouse.Domain.Constants
{
    public enum OrderStatus
    {
        /// <summary>
        /// Nháp
        /// </summary>
        Draft,

        /// <summary>
        /// Đang chờ xử lý
        /// </summary>
        Pending,

        /// <summary>
        /// Đã duyệt
        /// </summary>
        Approved,

        /// <summary>
        /// Không duyệt
        /// </summary>
        Decline,
        /// <summary>
        /// Đa giao đến nói
        /// </summary>
        Arrived,
        /// <summary>
        /// Đã nhận hàng
        /// </summary>
        Completed,

        /// <summary>
        /// Đã hủy
        /// </summary>
        Canceled
    }
}
