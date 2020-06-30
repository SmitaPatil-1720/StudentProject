﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Sample.DAL;
using Sample.Models;

namespace Sample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentapiController : ControllerBase
    {
       
        // GET: api/Studentapi
      
        // GET: api/Studentapi/5
        [HttpGet]
        public IActionResult Get(string studentName)
        {
            StudentDal dal = new StudentDal();
            List<StudentModel> search = (from temp in dal.StudentModels
                                         where temp.Name == studentName
                                         select temp)
                                         .ToList<StudentModel>();
            return Ok(search);
          
        }

        // POST: api/Studentapi
        [HttpPost]
        public IActionResult Post(StudentModel obj)
        {
            var context = new ValidationContext(obj, null, null);
            //fill the errors 
            var result = new List<ValidationResult>();
            var isValid = Validator.TryValidateObject(obj, context, result, true);

            if (result.Count == 0)
            {
                StudentDal dal = new StudentDal();
                dal.Database.EnsureCreated(); //tblStudent created
                dal.Add(obj);//adds in memory
                dal.SaveChanges();  //physical commit

                List<StudentModel> recs = dal.StudentModels.ToList<StudentModel>();

                return Ok(recs); //200(success)
            }
            else
            {
                return StatusCode(500, result);//500 
            }
        }

        // PUT: api/Studentapi/5
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
