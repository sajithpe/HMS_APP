using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Attendance
    {
        [Key]
        public int AttId { get; set; }

        public int EmployeeId { get; set; }

        public Employee Employee { get; set; }

        public int AttDeviceId { get; set; }

        public int HotelId { get; set; }

        public Hotel Hotel { get; set; }

        public string AttType { get; set; }

        public DateTime AttDatetime { get; set; }

        public string AttUpdateType { get; set; }

        public string AttStat { get; set; }
       
    }
}
