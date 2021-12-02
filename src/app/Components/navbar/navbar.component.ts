import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  opened: boolean = true;
  data:any;
  user:boolean=false;

  userLogin(){
    if(this.data){
      this.user=true;
    }
  }
  ngOnInit() {
   this.data=localStorage.getItem('name');
   this.userLogin();
  }
}
