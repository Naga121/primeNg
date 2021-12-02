import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() { }

  matchPassword(pwd:string,conPwd:string){
    return(regForm:FormGroup)=>{
      const password=regForm.controls[pwd];
      const conformPassword=regForm.controls[conPwd];
      if(!password || !conformPassword){
        return;
      }
      if(conformPassword.errors && !conformPassword.errors.passwordMismatch){
        return;
      }
      if(password.value !== conformPassword.value){
        conformPassword.setErrors({passwordMismatch:true})
      }else{
        conformPassword.setErrors(null)
      }
    }
  }
}
