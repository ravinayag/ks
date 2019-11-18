import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './../_helpers/must-match.validator';
import { ApiService } from './../api.service';

import { Response } from './../model/Response';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
registerForm: FormGroup;
submitted = false;
  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private toastr: ToastrService) { }

 
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            cpassword: ['', Validators.required]
        }, {
            Validators: MustMatch('password', 'cpassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

         // console.log(this.registerForm.value); return false;
         let user = {
                     name:this.registerForm.value.name,
                     email:this.registerForm.value.email,
                     password:this.registerForm.value.password
                     };
        this.apiService.createUser(user).subscribe((res : Response)=>{
        console.log(res);
            if(res.result){
                   this.submitted = false;
                   this.registerForm.reset();
      
            this.toastr.success(res.message);
            }else{
            this.toastr.info(res.message);
           

            } 
        });

        // display form values on success
    }

    


}
