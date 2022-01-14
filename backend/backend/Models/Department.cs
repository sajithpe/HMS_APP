using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Department
    {
        [Key]
        public int DepttId { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string DeptName { get; set; }

        public int HotelId { get; set; }

        public virtual Hotel Hotel { get; set; }

        public string DeptStatus { get; set; }
    }
}
