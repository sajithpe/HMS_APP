using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Liquor
    {
        [Key]
        public int LiqId { get; set; }

        public string LiqName { get; set; }

        public string LiqBotSize { get; set; }

        public decimal LiqBotPrice { get; set; }

        public decimal LiqShotPrice { get; set; }
    }
}
