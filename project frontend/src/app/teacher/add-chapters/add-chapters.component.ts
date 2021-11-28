import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questions } from 'src/model/questions';
import { Student } from 'src/model/student';

@Component({
  selector: 'app-add-chapters',
  templateUrl: './add-chapters.component.html',
  styleUrls: ['./add-chapters.component.css']
})
export class AddChaptersComponent implements OnInit {

  questions: Questions[];
  students: Student[];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigateByUrl('/teacher_dashboard');
  }

}
