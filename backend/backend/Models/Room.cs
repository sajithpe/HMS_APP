using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Room
    {
        

        [Key]
        public int RoomId { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string RoomName { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string RoomDescrip { get; set; }

        public int HotelId { get; set; }

        public Hotel Hotel { get; set; }

        [Column(TypeName = "nvarchar(5)")]
        public string RoomType { get; set; }

        public decimal RoomPrice { get; set; }
    }
}
