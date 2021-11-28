import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/model/student';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {

  students: Student[];

  constructor(private router: Router) { 
    this.students = [
      {
        id: 0,
        name: "Priyanka Srivastava",
        email: "psrivastava4300@gmail.com"
      },
      {
        id: 1,
        name: "Nitin Kumar",
        email: "nitinkumar@gmail.com"
      },
      {
        id: 2,
        name: "Pranjal Shukla",
        email: "pranjal@gmail.com"
      },
      {
        id: 3,
        name: "Pema Tanwar",
        email: "pema7800@gmail.com"
      }
    ]
  }

  ngOnInit(): void {
  }


  navigate() {
    this.router.navigateByUrl('/teacher_dashboard');
  }
}
