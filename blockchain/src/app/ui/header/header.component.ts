import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../_services/authentication.service';

import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './../../model/user';
import { Response } from './../../model/Response';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
currentUser: Object;
name: string = "";
 isLogIn:boolean = false;

  constructor(public auth:AuthenticationService, private router: Router) { 
    this.currentUser =JSON.parse(localStorage.getItem('currentUser'));
   
  }

  ngOnInit() {
  this.auth.currentUser.subscribe((x) =>{ if(x){  this.isLogIn = true; } });
  }

  onLogout(){
    this.auth.logout();      
    this.router.navigate(['/']); 
  }

}
