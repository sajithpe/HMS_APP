using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Hotel
    {
        [Key]
        public int HotelId { get; set; }

        [Column(TypeName ="nvarchar(20)")]
        public string HotelName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Area { get; set; }

        [Column(TypeName = "nvarchar(150)")]
        public string Address1 { get; set; }

        [Column(TypeName = "nvarchar(2)")]
        public string HotelType { get; set; }

        [Column(TypeName = "nvarchar(1)")]
        public string DeleteStatus { get; set; }

    }
}
