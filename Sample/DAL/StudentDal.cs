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
        private object constr;
        

        public StudentDal(object constr)
        {
            this.constr = constr;
        }

        public StudentDal(DbContextOptions<StudentDal> options): base(options)
        {
            
        }

        public StudentDal()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=SMITA;Initial Catalog=StudentManagementDB;Integrated Security=True");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>().HasKey(p => p.Id);
            modelBuilder.Entity<Address>().HasKey(p => p.id);
           
            modelBuilder.Entity<Student>().Property(t => t.Id)
                .ValueGeneratedNever();
          
            modelBuilder.Entity<Student>()
                .ToTable("tblStudent");
            modelBuilder.Entity<Address>()
                .ToTable("tblAddress");
            modelBuilder.Entity<Registration>()
                .ToTable("tblRegistration");

            modelBuilder.Entity<Registration>().HasKey(R => R.id);
            modelBuilder.Entity<Registration>().HasIndex(u => u.userName).IsUnique();

            // modelBuilder.Entity<Registration>().HasAlternateKey(u => u.Username);
            // modelBuilder.Entity<Registration>().HasIndex(R => R.Password).IsUnique();
            //one to many
            modelBuilder.Entity<Student>()
                .HasMany(c => c.addresses)
                .WithOne(e => e.student);
        }

        public DbSet<Student> StudentModels { get; set; }
        public DbSet<Registration> RegisterModels { get; set; }
      
    }
}

