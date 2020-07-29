using System.ComponentModel;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class WarehouseConfigSetting
    {
        [DisplayName("Calculator method")]
        public string CalculatorMethod { get; set; }
    }
}
