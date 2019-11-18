import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './../../../api.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: "app-users",
  templateUrl: "users.component.html"
})
export class AllUsersComponent implements OnInit {
alluser:any;
  constructor( private apiService: ApiService) {}

  ngOnInit() {


   this.apiService.AllUser().subscribe((res)=>{
        console.log(res);
        this.alluser=res; 
        });

  }
}
