using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class LiqStoreExpense
    {
        [Key]
        public int LiqExId { get; set; }

        public int HotelId { get; set; }

        public int ExpenseId { get; set; }

        public string LiqExDes { get; set; }

        public decimal LiqExValue { get; set; }

        public string EnteredBy { get; set; }

        public DateTime EnteredOn { get; set; }

        public string LiqExStat { get; set; }

        public Hotel Hotel { get; set; }

    }
}
