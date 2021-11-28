import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chapter } from 'src/model/chapter';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  chapters: Chapter[];

  constructor(private router: Router) {
    this.chapters = [
      {
        id: 0,
        title: "Algebra",
        description: "Let's study about X, Y and Z",
        qid: 0,
        tid: 0
      },
      {
        id: 1,
        title: "English",
        description: "Test your Grammar",
        qid: 0,
        tid: 0
      },
      {
        id: 2,
        title: "History",
        description: "A peek into the past",
        qid: 0,
        tid: 0
      },
      {
        id: 3,
        title: "Geography",
        description: "The wonders of the earth",
        qid: 0,
        tid: 0
      },
      {
        id: 4,
        title: "Programming",
        description: "Test Your Programming fundamentals",
        qid: 0,
        tid: 0
      }
    ]
   }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigateByUrl('/login');
  }

}
