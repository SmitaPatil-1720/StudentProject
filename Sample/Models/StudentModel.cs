using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Sample.Models
{
    public class StudentModel
    {
        public int Id { get; set; }

        [Required]
        [RegularExpression("^[a-z]{1,10}$")]
        public string Name { get; set; }

        [Required]
        public string Address { get; set; }
    }
}
