using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Expense
    {
        [Key]
        public int ExpenseId { get; set; }
        public string ExpenseName { get; set; }

    }
}
