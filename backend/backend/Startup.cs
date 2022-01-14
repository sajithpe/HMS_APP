using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();

//-------------------------------------------------------------------------------------------------------------------//

            //--------Instance of DB connection.------------start//

            services.AddDbContext<BackEndDBConext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DBConnection")));

            //--------Instance of DB connection.------------end//

            //--------Inject appsettings.------------start//

            services.Configure<ApplicationSettings>(Configuration.GetSection("ApplicationSettings"));

            //--------Inject appsettings.------------end//


            //--------Authentication.------------start//

            // services.AddIdentityCore<User>()
              //  .AddUserStore<BackEndDBConext>();

            //--------Authentication------------end//


            //--------Enable Cors.------------start//

            services.AddCors();

            //--------Enable Cors.------------end//

            //-----------JWT Authentication-------------start//

           // var key = Encoding.UTF8.GetBytes(Configuration["ApplicationSettings:JWT_Secret"].ToString());

           /* services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x=> {

                x.RequireHttpsMetadata = false;
                x.SaveToken = false;
                x.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                };
            });*/


            //-----------JWT Authentication-------------end//
//-------------------------------------------------------------------------------------------------------------------//

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "backend", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            
//-------------------------------------------------------------------------------------------------------------------//
            //-----------Cors Configuration-------------start//

            app.UseCors(Options =>
            Options.WithOrigins(Configuration["ApplicationSettings:Client_Url"].ToString())
            .AllowAnyMethod()
            .AllowAnyHeader());

            //-----------Cors Configuration-------------end//

            

          
//-------------------------------------------------------------------------------------------------------------------//

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "backend v1"));
               
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseAuthentication();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
