import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { Student } from 'src/model/student';
import { Teacher } from 'src/model/teacher';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authForm: FormGroup;
  isSubmitted  =  false;
  student: Student;
  teacher: Teacher;

  constructor(private router: Router, private formBuilder: FormBuilder ) { 
    this.student = new Student();
    this.teacher = new Teacher();
  }
  
  ngOnInit() {
    this.authForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      selectedType: ['', Validators.required]
    }, { validator: this.MustMatch('password', 'confirmPassword') });
  }

  get formControls() { return this.authForm.controls; }

  signUp(){
    this.isSubmitted = true;
    if(this.authForm.invalid) {
      return;
    }
    this.setValues();
    // this.authService.signIn(this.authForm.value);
    this.router.navigateByUrl('/login');
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  setValues() {
    const value = this.authForm.value;
    if(value.selectedType === 'teacher') {
      this.teacher.email = value.email;
      this.teacher.password = value.password;
    }
    else {
      this.student.email = value.email;
      this.student.password = value.password;
    }
  }

  login() {
    this.router.navigateByUrl('/login');
  }

}
