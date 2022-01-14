using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class all : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    CustId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustName1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CustName2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CustContact = table.Column<int>(type: "int", nullable: false),
                    CustEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CustDeleteStat = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.CustId);
                });

            migrationBuilder.CreateTable(
                name: "EmpCats",
                columns: table => new
                {
                    EmpCatId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmpCatName = table.Column<string>(type: "nvarchar(20)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmpCats", x => x.EmpCatId);
                });

            migrationBuilder.CreateTable(
                name: "Expenses",
                columns: table => new
                {
                    ExpenseId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ExpenseName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Expenses", x => x.ExpenseId);
                });

            migrationBuilder.CreateTable(
                name: "Hotels",
                columns: table => new
                {
                    HotelId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HotelName = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    Area = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Address1 = table.Column<string>(type: "nvarchar(150)", nullable: true),
                    HotelType = table.Column<string>(type: "nvarchar(2)", nullable: true),
                    DeleteStatus = table.Column<string>(type: "nvarchar(1)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hotels", x => x.HotelId);
                });

            migrationBuilder.CreateTable(
                name: "Liquors",
                columns: table => new
                {
                    LiqId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LiqName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LiqBotSize = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LiqBotPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    LiqShotPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Liquors", x => x.LiqId);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    RoleId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RoleObject = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.RoleId);
                });

            migrationBuilder.CreateTable(
                name: "VASs",
                columns: table => new
                {
                    VasId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VasName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VasValue = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VASs", x => x.VasId);
                });

            migrationBuilder.CreateTable(
                name: "CustInquiries",
                columns: table => new
                {
                    InqId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerCustId = table.Column<int>(type: "int", nullable: false),
                    HotelId = table.Column<int>(type: "int", nullable: false),
                    InqDescrip = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InqRoomType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EnteredBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EnteredOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    InqStatus = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustInquiries", x => x.InqId);
                    table.ForeignKey(
                        name: "FK_CustInquiries_Customers_CustomerCustId",
                        column: x => x.CustomerCustId,
                        principalTable: "Customers",
                        principalColumn: "CustId",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_CustInquiries_Hotels_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotels",
                        principalColumn: "HotelId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Departments",
                columns: table => new
                {
                    DepttId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DeptName = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    HotelId = table.Column<int>(type: "int", nullable: false),
                    DeptStatus = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departments", x => x.DepttId);
                    table.ForeignKey(
                        name: "FK_Departments_Hotels_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotels",
                        principalColumn: "HotelId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LiqStoreExpenses",
                columns: table => new
                {
                    LiqExId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HotelId = table.Column<int>(type: "int", nullable: false),
                    ExpenseId = table.Column<int>(type: "int", nullable: false),
                    LiqExDes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LiqExValue = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    EnteredBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EnteredOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LiqExStat = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LiqStoreExpenses", x => x.LiqExId);
                    table.ForeignKey(
                        name: "FK_LiqStoreExpenses_Hotels_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotels",
                        principalColumn: "HotelId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Rooms",
                columns: table => new
                {
                    RoomId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoomName = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    RoomDescrip = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    HotelId = table.Column<int>(type: "int", nullable: false),
                    RoomType = table.Column<string>(type: "nvarchar(5)", nullable: true),
                    RoomPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rooms", x => x.RoomId);
                    table.ForeignKey(
                        name: "FK_Rooms_Hotels_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotels",
                        principalColumn: "HotelId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LiqStoreIncomes",
                columns: table => new
                {
                    IncomeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HotelId = table.Column<int>(type: "int", nullable: false),
                    LiqId = table.Column<int>(type: "int", nullable: false),
                    LiqBotCount = table.Column<int>(type: "int", nullable: false),
                    LiqShotCount = table.Column<int>(type: "int", nullable: false),
                    LiqValue = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    EnteredBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EnteredOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LiquorLiqId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LiqStoreIncomes", x => x.IncomeId);
                    table.ForeignKey(
                        name: "FK_LiqStoreIncomes_Hotels_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotels",
                        principalColumn: "HotelId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LiqStoreIncomes_Liquors_LiquorLiqId",
                        column: x => x.LiquorLiqId,
                        principalTable: "Liquors",
                        principalColumn: "LiqId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    EmpId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmpName1 = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    EmpName2 = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    EmpContact = table.Column<int>(type: "int", nullable: false),
                    EmpAddress1 = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    EmpAddress2 = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    EmpAddress3 = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    EmpDOB = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EmpNIC = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    EmpCatId = table.Column<int>(type: "int", nullable: false),
                    HotelId = table.Column<int>(type: "int", nullable: false),
                    DepttId = table.Column<int>(type: "int", nullable: false),
                    DepartmentDepttId = table.Column<int>(type: "int", nullable: true),
                    EmptStatus = table.Column<string>(type: "nvarchar(1)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.EmpId);
                    table.ForeignKey(
                        name: "FK_Employees_Departments_DepartmentDepttId",
                        column: x => x.DepartmentDepttId,
                        principalTable: "Departments",
                        principalColumn: "DepttId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Employees_EmpCats_EmpCatId",
                        column: x => x.EmpCatId,
                        principalTable: "EmpCats",
                        principalColumn: "EmpCatId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Employees_Hotels_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotels",
                        principalColumn: "HotelId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Payments",
                columns: table => new
                {
                    PaymentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HoteId = table.Column<int>(type: "int", nullable: false),
                    ResId = table.Column<int>(type: "int", nullable: false),
                    CustId = table.Column<int>(type: "int", nullable: false),
                    RoomId = table.Column<int>(type: "int", nullable: false),
                    PaymentAmount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    PaymentType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PaymentDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EnteredBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PaymentStat = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CustomerCustId = table.Column<int>(type: "int", nullable: true),
                    HotelId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Payments", x => x.PaymentId);
                    table.ForeignKey(
                        name: "FK_Payments_Customers_CustomerCustId",
                        column: x => x.CustomerCustId,
                        principalTable: "Customers",
                        principalColumn: "CustId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Payments_Hotels_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotels",
                        principalColumn: "HotelId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Payments_Rooms_RoomId",
                        column: x => x.RoomId,
                        principalTable: "Rooms",
                        principalColumn: "RoomId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Reservations",
                columns: table => new
                {
                    ResId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HotelId = table.Column<int>(type: "int", nullable: false),
                    RoomId = table.Column<int>(type: "int", nullable: false),
                    CustId = table.Column<int>(type: "int", nullable: false),
                    ResAdults = table.Column<int>(type: "int", nullable: false),
                    ResKids = table.Column<int>(type: "int", nullable: false),
                    ResCheckIn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ResCheckOut = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ResPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ResDiscount = table.Column<int>(type: "int", nullable: false),
                    ResNetValue = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ResStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EnteredBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EnteredOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CustomerCustId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reservations", x => x.ResId);
                    table.ForeignKey(
                        name: "FK_Reservations_Customers_CustomerCustId",
                        column: x => x.CustomerCustId,
                        principalTable: "Customers",
                        principalColumn: "CustId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Reservations_Hotels_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotels",
                        principalColumn: "HotelId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Reservations_Rooms_RoomId",
                        column: x => x.RoomId,
                        principalTable: "Rooms",
                        principalColumn: "RoomId",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "Attendances",
                columns: table => new
                {
                    AttId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmployeeId = table.Column<int>(type: "int", nullable: false),
                    AttDeviceId = table.Column<int>(type: "int", nullable: false),
                    HotelId = table.Column<int>(type: "int", nullable: false),
                    AttType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AttDatetime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AttUpdateType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AttStat = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Attendances", x => x.AttId);
                    table.ForeignKey(
                        name: "FK_Attendances_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "EmpId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Attendances_Hotels_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotels",
                        principalColumn: "HotelId",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "Salaries",
                columns: table => new
                {
                    SalId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmpId = table.Column<int>(type: "int", nullable: false),
                    SalBasic = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    SalTrAll = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    SalOtRate = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    SalETF = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    SalEPF = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    SalHPay = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    EmployeeEmpId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Salaries", x => x.SalId);
                    table.ForeignKey(
                        name: "FK_Salaries_Employees_EmployeeEmpId",
                        column: x => x.EmployeeEmpId,
                        principalTable: "Employees",
                        principalColumn: "EmpId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmpId = table.Column<int>(type: "int", nullable: false),
                    EmployeeEmpId = table.Column<int>(type: "int", nullable: true),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserPW = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserStat = table.Column<string>(type: "nvarchar(1)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                    table.ForeignKey(
                        name: "FK_Users_Employees_EmployeeEmpId",
                        column: x => x.EmployeeEmpId,
                        principalTable: "Employees",
                        principalColumn: "EmpId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ReservationVAs",
                columns: table => new
                {
                    ResVASId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ResId = table.Column<int>(type: "int", nullable: false),
                    VASId = table.Column<int>(type: "int", nullable: false),
                    ResCount = table.Column<int>(type: "int", nullable: false),
                    ResDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EnteredBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ResStat = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ReservationResId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReservationVAs", x => x.ResVASId);
                    table.ForeignKey(
                        name: "FK_ReservationVAs_Reservations_ReservationResId",
                        column: x => x.ReservationResId,
                        principalTable: "Reservations",
                        principalColumn: "ResId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ReservationVAs_VASs_VASId",
                        column: x => x.VASId,
                        principalTable: "VASs",
                        principalColumn: "VasId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserRoles",
                columns: table => new
                {
                    UserRoleId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    RoleId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserRoles", x => x.UserRoleId);
                    table.ForeignKey(
                        name: "FK_UserRoles_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "RoleId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserRoles_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Attendances_EmployeeId",
                table: "Attendances",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_Attendances_HotelId",
                table: "Attendances",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_CustInquiries_CustomerCustId",
                table: "CustInquiries",
                column: "CustomerCustId");

            migrationBuilder.CreateIndex(
                name: "IX_CustInquiries_HotelId",
                table: "CustInquiries",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_Departments_HotelId",
                table: "Departments",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_DepartmentDepttId",
                table: "Employees",
                column: "DepartmentDepttId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_EmpCatId",
                table: "Employees",
                column: "EmpCatId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_HotelId",
                table: "Employees",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_LiqStoreExpenses_HotelId",
                table: "LiqStoreExpenses",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_LiqStoreIncomes_HotelId",
                table: "LiqStoreIncomes",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_LiqStoreIncomes_LiquorLiqId",
                table: "LiqStoreIncomes",
                column: "LiquorLiqId");

            migrationBuilder.CreateIndex(
                name: "IX_Payments_CustomerCustId",
                table: "Payments",
                column: "CustomerCustId");

            migrationBuilder.CreateIndex(
                name: "IX_Payments_HotelId",
                table: "Payments",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_Payments_RoomId",
                table: "Payments",
                column: "RoomId");

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_CustomerCustId",
                table: "Reservations",
                column: "CustomerCustId");

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_HotelId",
                table: "Reservations",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_RoomId",
                table: "Reservations",
                column: "RoomId");

            migrationBuilder.CreateIndex(
                name: "IX_ReservationVAs_ReservationResId",
                table: "ReservationVAs",
                column: "ReservationResId");

            migrationBuilder.CreateIndex(
                name: "IX_ReservationVAs_VASId",
                table: "ReservationVAs",
                column: "VASId");

            migrationBuilder.CreateIndex(
                name: "IX_Rooms_HotelId",
                table: "Rooms",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_Salaries_EmployeeEmpId",
                table: "Salaries",
                column: "EmployeeEmpId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRoles_RoleId",
                table: "UserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRoles_UserId",
                table: "UserRoles",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_EmployeeEmpId",
                table: "Users",
                column: "EmployeeEmpId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Attendances");

            migrationBuilder.DropTable(
                name: "CustInquiries");

            migrationBuilder.DropTable(
                name: "Expenses");

            migrationBuilder.DropTable(
                name: "LiqStoreExpenses");

            migrationBuilder.DropTable(
                name: "LiqStoreIncomes");

            migrationBuilder.DropTable(
                name: "Payments");

            migrationBuilder.DropTable(
                name: "ReservationVAs");

            migrationBuilder.DropTable(
                name: "Salaries");

            migrationBuilder.DropTable(
                name: "UserRoles");

            migrationBuilder.DropTable(
                name: "Liquors");

            migrationBuilder.DropTable(
                name: "Reservations");

            migrationBuilder.DropTable(
                name: "VASs");

            migrationBuilder.DropTable(
                name: "Roles");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropTable(
                name: "Rooms");

            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "Departments");

            migrationBuilder.DropTable(
                name: "EmpCats");

            migrationBuilder.DropTable(
                name: "Hotels");
        }
    }
}
