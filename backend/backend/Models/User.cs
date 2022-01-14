using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        public int EmpId { get; set; }
        
        public Employee Employee { get; set; }

        public string UserName { get; set; }

        [DataType(DataType.Password)]
        public string UserPW { get; set; }

        [Column(TypeName = "nvarchar(1)")]
        public string UserStat { get; set; }
    }
}
