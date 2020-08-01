import {NgForm,
     FormGroup,
          FormControl,
               Validators,
FormBuilder               
} from '@angular/forms'

export class Registration{
     id:number=0;
    FirstName:string="";
    LastName:string="";
    Email:string="";
    userName:string="";
    password:string="";
    token:string="";

    formRegisterGroup:FormGroup=null;
    constructor(){
         //tree structure
         var _builder=new FormBuilder();
         //use the builder and create tree structure
         this.formRegisterGroup=_builder.group({});
         // add valodation to form group
         this.formRegisterGroup.addControl("fnamecontrol",
         new FormControl('',Validators.required));
         //add address is required
         this.formRegisterGroup.addControl("lnamecontrol",
         new FormControl('',Validators.required));

         this.formRegisterGroup.addControl("emailcontrol",
         new FormControl('',Validators.required));

         this.formRegisterGroup.addControl("usernamecontrol",
         new FormControl('',Validators.required));

         this.formRegisterGroup.addControl("passwordcontrol",
         new FormControl('',Validators.required));
    }
   
    
}