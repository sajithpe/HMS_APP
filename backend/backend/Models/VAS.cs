using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class VAS
    {
        [Key]
        public int VasId { get; set; }

        public string VasName { get; set; }

        public decimal VasValue { get; set; }

    }
}
