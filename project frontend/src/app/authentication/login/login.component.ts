import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;
  isSubmitted  =  false;
  user: number;


  constructor(private router: Router, private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.authForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.authForm.controls; }

  signIn(){
    this.isSubmitted = true;
    if(this.authForm.invalid) {
      return;
    }
    if(this.authForm.value.email === "priya@gmail.com") {
      this.router.navigateByUrl('/teacher_dashboard');
    }
    else this.router.navigateByUrl('/student_dashboard');
  }

  register() {
    this.router.navigateByUrl('/register');
  }

}
