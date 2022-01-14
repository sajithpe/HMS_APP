using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class ReservationVAS
    {
        [Key]
        public int ResVASId { get; set; }

        public int ResId { get; set; }

        public int VASId { get; set; }

        public int ResCount { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime ResDate { get; set; }

        public string EnteredBy { get; set; }

        public string ResStat { get; set; }

        public Reservation Reservation { get; set; }

        public VAS VAS { get; set; }
    }
}
