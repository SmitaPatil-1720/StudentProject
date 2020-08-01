using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Sample.DAL;
using Sample.Models;
using static Microsoft.AspNetCore.Hosting.Internal.HostingApplication;

namespace Sample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class SecurityController : ControllerBase
    {
        string constr = "";

        public SecurityController(IConfiguration configuration)
        {
            constr = configuration["ConnStr"];

        }


        private string GenerateKey(string userName)
        {
            //key
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("5678007543223455676"));
            //algorithm
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            //claims
            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, "userName"),
                new Claim(JwtRegisteredClaimNames.Email, ""),
                new Claim("Admin","true"),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken("FinishingSchool",
                "FinishingSchool",
                claims,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);

            string tokenstring = new JwtSecurityTokenHandler().WriteToken(token);
            return tokenstring;

        }

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }


        // GET: api/Security/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
           return "value";
       }

        // POST: api/Security
       [HttpPost]
       public IActionResult Post([FromBody] User Obj)  
        {
            StudentDal dal = new StudentDal();
            if (ModelState.IsValid)  
            {
                using (var DbContext = new StudentDal())
                {
                    List<Registration> user = (from temp in dal.RegisterModels
                                                 .Where(temp => temp.userName == Obj.userName
                                               && temp.password == Obj.password)
                                            select temp)
                                        .ToList<Registration>();

                    if (user != null)
                    {
                        Obj.token = GenerateKey(Obj.userName);
                        Obj.password = "";
                        return Ok(Obj);

                    }
                    else
                    {
                        ModelState.AddModelError("", "Invalid User Name or Password");
                        return Ok(Obj);
                    }
                }  
            }  
            else  
            {
                return Ok(Obj);
            }  
        }

       

        /*public IActionResult Post([FromBody] User obj)
         {
             if((obj.userName=="smita") && (obj.password == "pass@123")){
                 obj.token = GenerateKey(obj.userName);
                 obj.password = "";
                 return Ok(obj);
             }
             else
             {
                 return StatusCode(401, "Not a proper user");
             }
         }*/

        // PUT: api/Security/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
