using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Models
{
    public class BackEndDBConext:DbContext
    {
        public BackEndDBConext(DbContextOptions<BackEndDBConext> options) : base(options)
        {

        }

        public DbSet<Hotel> Hotels { get; set; }

        public DbSet<Department> Departments { get; set; }

        public DbSet<EmpCat> EmpCats { get; set; }

        public DbSet<Employee> Employees { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Role> Roles { get; set; }

        public DbSet<UserRole> UserRoles { get; set; }

        public DbSet<Room> Rooms { get; set; }

        public DbSet<VAS> VASs { get; set; }

        public DbSet<Customer> Customers { get; set; }

        public DbSet<CustInquiry> CustInquiries { get; set; }

        public DbSet<Reservation> Reservations { get; set; }

        public DbSet<ReservationVAS> ReservationVAs { get; set; }

        public DbSet<Payment> Payments { get; set; }

        public DbSet<Liquor> Liquors { get; set; }

        public DbSet<LiqStoreIncome> LiqStoreIncomes { get; set; }

        public DbSet<Expense> Expenses { get; set; }

        public DbSet<LiqStoreExpense> LiqStoreExpenses { get; set; }

        public DbSet<Attendance> Attendances { get; set; }

        public DbSet<Salary> Salaries { get; set; }
    }
}


