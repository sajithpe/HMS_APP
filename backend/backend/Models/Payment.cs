using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Payment
    {
        [Key]
        public int PaymentId { get; set; }

        public int HoteId { get; set; }

        public int ResId { get; set; }

        public int CustId { get; set; }

        public int RoomId { get; set; }

        public decimal PaymentAmount { get; set; }

        public string PaymentType { get; set; }

        public DateTime PaymentDate { get; set; }

        public string EnteredBy { get; set; }

        public string PaymentStat { get; set; }

        public Reservation Reservation { get; }

        public Customer Customer { get; set; }

        public Room Room { get; set; }

        public Hotel Hotel { get; set; }
    }
}
