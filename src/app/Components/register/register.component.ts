import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/Model/employee';
import { CustomValidatorService } from 'src/app/Service/custom-validator.service';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public regForm!:FormGroup;
  public inputType='password';
  submitted:boolean= false;
  public errorMsg='';

  // Show Password Methode
  showPassword(event:any){
    if(event.target.checked){
      this.inputType='text';
    }else{
      this.inputType='password'
    }
  }
  // Form Control
  get f(){
    return this.regForm.controls
  }

  emailPattern= new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
  passwordPattern= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  mobilePattern=new RegExp("^((\\+91-?)|0)?[0-9]{10}$");

  constructor(private fb:FormBuilder,private ls:LoginService,private cvs:CustomValidatorService,private route:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.regForm=this.fb.group({
      fName:['',[Validators.required,Validators.minLength(3)]],
      lName:['',[Validators.required,Validators.minLength(3)]],
      mobile:['',[Validators.required,Validators.pattern(this.mobilePattern)]],
      email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
      pwd:['',[Validators.required,Validators.pattern(this.passwordPattern)]],
      conPwd:['',[Validators.required]],
      term:['',[Validators.required]]
    },{
      validator: this.cvs.matchPassword('pwd', 'conPwd'),
    });
    this.getRegFoem();
  }

  onSubmit(){
    this.submitted=true;
    this.ls.postReg(this.regForm.value).subscribe((res:Employee[])=>{
      this.route.navigate(['login']);
      this.regForm.reset();
      this.toaster.success('Registation Success','Login')
    });
  }
  // get regForm Data
  getRegFoem(){
    this.ls.getReg().subscribe((res:Employee[])=>{
      console.log("Uesr data",res);

    })
  }

}
