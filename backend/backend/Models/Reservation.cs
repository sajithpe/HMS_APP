using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Reservation
    {
        [Key]
        public int ResId { get; set; }

        public int HotelId { get; set; }

        public int RoomId { get; set; }

        public int CustId { get; set; }

        public int ResAdults { get; set; }

        public int ResKids { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime ResCheckIn { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime ResCheckOut { get; set; }

        public decimal ResPrice { get; set; }

        public int ResDiscount { get; set; }

        public decimal ResNetValue { get; set; }

        public string ResStatus { get; set; }

        public string EnteredBy { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime EnteredOn { get; set; }

        public Room Room { get; set; }

        public Customer Customer { get; set; }

        public Hotel Hotel { get; set; }
    }
}
