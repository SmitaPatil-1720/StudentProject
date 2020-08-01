using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Sample.Models
{
    public class Student
    {
        public int Id { get; set; }

        [Required]
        [RegularExpression("^[a-z]{1,10}$")]
        public string Name { get; set; }

        public List<Address> addresses { get; set; }
    }
    public class Address
    {
        public int id { get; set; }
        [Required]
        public string address { get; set; }
        public Student student { get; set; }
    }
}
