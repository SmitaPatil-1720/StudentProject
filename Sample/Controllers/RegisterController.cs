using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Sample.DAL;
using Sample.Models;

namespace Sample.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        string constr = "";
        
        public RegisterController(IConfiguration configuration )
        {
            constr = configuration["ConnStr"];
            
        }


        // GET: api/Register
        [HttpGet]
        [Authorize]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

         //GET: api/Register/5
     // [HttpGet("{id}", Name = "Get")]
      //  public string Get(int id)
      //  {
       //     return "value";
     //  }

        // POST: api/Register
        [HttpPost]
        public IActionResult Post(Registration obj)
        {
            
               var context = new ValidationContext(obj, null, null);
                //fill the errors 
                var result = new List<ValidationResult>();
                var isValid = Validator.TryValidateObject(obj, context, result, true);

                if (result.Count == 0)
                {

                    StudentDal dal = new StudentDal(constr);

                    dal.Database.EnsureCreated(); //tbl created
                    dal.Add(obj);//adds in memory

                    dal.SaveChanges();  //physical commit

                    List<Registration> recs = dal.RegisterModels.ToList<Registration>();

                    return Ok(recs); //200(success)
                }
                else
                {
                    return StatusCode(500, result);//500 
                }
            
        }




        // PUT: api/Register/5
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
