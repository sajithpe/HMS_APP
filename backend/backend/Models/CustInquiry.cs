    using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class CustInquiry
    {
        [Key]
        public int InqId { get; set; }

        
        public int CustomerCustId { get; set; }

        public Customer Customer { get; set; }

        public int HotelId { get; set; }     

        public Hotel Hotel { get; set; }

        public string InqDescrip { get; set; }

        public string InqRoomType { get; set; }

        public string EnteredBy { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime EnteredOn { get; set; }

        public string InqStatus { get; set; }


    }
}
