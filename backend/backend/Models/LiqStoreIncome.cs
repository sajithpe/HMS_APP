using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class LiqStoreIncome
    {
        [Key]
        public int IncomeId { get; set; }

        public int HotelId { get; set; }

        public int LiqId { get; set; }

        public int LiqBotCount { get; set; }

        public int LiqShotCount { get; set; }

        public decimal LiqValue { get; set; }

        public string EnteredBy { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime EnteredOn { get; set; }

        public Hotel Hotel { get; set; }
        
        public Liquor Liquor { get; set; }

      
    }
}
