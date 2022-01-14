using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Salary
    {
        [Key]
        public int SalId { get; set; }

        public int EmpId { get; set; }

        public decimal SalBasic { get; set; }

        public decimal SalTrAll { get; set; }

        public decimal SalOtRate { get; set; }

        public decimal SalETF { get; set; }

        public decimal SalEPF { get; set; }

        public decimal SalHPay { get; set; }

        public Employee Employee { get; set; }

    }
}
