import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/Model/employee';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  inputType = 'password';
  errorMsg = '';

  name: string = '';

  constructor(
    private fb: FormBuilder,
    private ls: LoginService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  showPassword(event: any) {
    if (event.target.checked) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required],
    });
  }

  login() {
    let email = this.loginForm.value.email;
    let pwd = this.loginForm.value.pwd;
    if (email != '' && pwd != '') {
      this.ls.getLogin(email).subscribe((res: Employee[]) => {
        if (res.length != 0) {
          if (pwd == res[0].pwd) {
            localStorage.setItem('name', res[0].fName);
            this.router.navigate(['navbar']);
            this.toaster.success('Login Success', 'Login');
          } else {
            this.errorMsg = `Your Password incorrect `;
            this.toaster.error('Password is incorrect');
          }
        } else {
          this.errorMsg = `Your email &&  Password incorrect / Please Register`;
          this.toaster.error('Your email &&  Password incorrect', 'Error');
        }
      });
    } else {
      this.errorMsg = `Enter your email and password`;
      this.toaster.warning('Enter your email and password', 'login');
    }
  }
}
