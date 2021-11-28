import { Component, OnInit } from '@angular/core';
// import { QuizService } from '../shared/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  score: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getScore();
  }


  getScore() {
    this.score = this.route.snapshot.paramMap.get('score');
  }

  navigate() {
    this.router.navigateByUrl('/student_dashboard');
  }

}