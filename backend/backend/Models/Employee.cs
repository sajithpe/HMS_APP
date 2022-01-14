using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Employee
    {
        [Key]
        public int EmpId { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string EmpName1 { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string EmpName2 { get; set; }

        public int EmpContact { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string EmpAddress1 { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string EmpAddress2 { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string EmpAddress3 { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime EmpDOB { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string EmpNIC { get; set; }

        public int EmpCatId { get; set; }

        public EmpCat EmpCat { get; set; }

        public int HotelId { get; set; }

        public Hotel Hotel { get; set; }

        public int DepttId { get; set; }

        public Department Department { get; set; }

        [Column(TypeName ="nvarchar(1)")]
        public string EmptStatus { get; set; }
    }
}

