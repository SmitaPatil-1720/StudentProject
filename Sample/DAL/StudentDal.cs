using Microsoft.EntityFrameworkCore;
using Sample.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sample.DAL
{
    public class StudentDal : DbContext
    {

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=SMITA;Initial Catalog=StudentManagementDB;Integrated Security=True");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<StudentModel>().HasKey(p => p.Id);
            modelBuilder.Entity<StudentModel>().Property(t => t.Id)
                .ValueGeneratedNever();

            modelBuilder.Entity<StudentModel>()
                .ToTable("tblStudent");
            
        }

        public DbSet<StudentModel> StudentModels { get; set; }
    }
}

