using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class EmpCat
    {
        [Key]
        public int EmpCatId{ get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string EmpCatName { get; set; }
    }
}
