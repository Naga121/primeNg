import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { primengModule } from './primeng/primeng.module';
import { AngmaterialModule } from './angmaterial/angmaterial.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginService } from './Service/login.service';
import { CustomValidatorService } from './Service/custom-validator.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngmaterialModule,
    primengModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()

  ],
  providers: [LoginService,CustomValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
