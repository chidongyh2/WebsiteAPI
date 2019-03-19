namespace GHM.Warehouse.Domain.Constants
{
    public enum InventoryCalculatorMethod
    {
        /// <summary>
        /// Phương pháp thực tế đích danh.
        /// </summary>
        SpecificIdentificationMethod,
        /// <summary>
        /// Bình quân ra quyền cả kỳ dự trữ.
        /// </summary>
        WeightedAverage,
        /// <summary>
        /// Bình quân ra quyền tức thì sau mỗi lần nhập.
        /// </summary>
        WeightedAverageImmediately,
        /// <summary>
        /// Nhập trước xuất trước.
        /// </summary>
        FIFO,
        /// <summary>
        /// Nhập sau xuất trước.
        /// </summary>
        LIFO
    }
}
