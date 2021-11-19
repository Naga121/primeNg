import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ImageModule} from 'primeng/image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { AngmaterialModule } from './Components/angmaterial/angmaterial.module';
import { primengModule } from './primeng/angmaterial.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngmaterialModule,
    primengModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
