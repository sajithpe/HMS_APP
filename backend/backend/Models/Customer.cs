using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Customer
    {
        [Key]
        public int CustId { get; set; }

        public string CustName1 { get; set; }

        public string CustName2 { get; set; }

        public int CustContact { get; set; }

        public string CustEmail { get; set; }

        public string CustDeleteStat { get; set; }



    }
}
