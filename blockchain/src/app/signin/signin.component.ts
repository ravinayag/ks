import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './../api.service';
import { Response } from './../model/Response';
import { first } from 'rxjs/operators';

import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from './../_services';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
loginForm: FormGroup;
submitted = false;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService,private authenticationService: AuthenticationService, private router: Router, private toastr: ToastrService) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
    let user = {
                     name:'',
                     email:this.loginForm.value.email,
                     password:this.loginForm.value.password
                     };

          this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password)
            .pipe(first())
            .subscribe(
                (res : Response) => {
                console.log(res);
                             if(res.result){
                                           this.submitted = false;
                                           this.loginForm.reset();
                       if(res.data.length > 0){

                       this.toastr.success(res.message);
                       }else{
                       this.toastr.info("invalid username/password");
                       }
                       
                                    this.router.navigate(['/']);
                                    }else{
                      this.toastr.info(res.message);

                                    } 
                },
                error => {
                      this.toastr.info(error);
                });
    }

    onReset() {
        this.submitted = false;
        this.loginForm.reset();
    }


}

