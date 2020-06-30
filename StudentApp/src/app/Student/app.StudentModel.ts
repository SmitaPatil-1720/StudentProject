import {NgForm,
     FormGroup,
          FormControl,
               Validators,
FormBuilder               
} from '@angular/forms'


export class StudentModel{
     Id:number=0;
     Name:string="";
     Address:string="";

     formStudentGroup:FormGroup=null;
     constructor(){
          //tree structure
          var _builder=new FormBuilder();
          //use the builder and create tree structure
          this.formStudentGroup=_builder.group({});
          // add valodation to form group
          this.formStudentGroup.addControl("namecontrol",
          new FormControl('',Validators.required));
          //add address is required
          this.formStudentGroup.addControl("addresscontrol",
          new FormControl('',Validators.required));

     }
}