import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questions } from 'src/model/questions';

@Component({
  selector: 'app-manage-questions',
  templateUrl: './manage-questions.component.html',
  styleUrls: ['./manage-questions.component.css']
})
export class ManageQuestionsComponent implements OnInit {

  questions: Questions[];

  constructor(private router: Router) {
    this.questions = [
      {
        id: 0,
        question: "Which of the following ancient Indian Kings had appointed Dhamma Mahamattas?",
        options: ["Ashoka", "Chandragupta Maurya", "Kanishka", "Chandragupta-2"],
        answer: "Ashoka"
      },
      {
        id: 1,
        question: "The rulers of which dynasty were first to make land grants to Brahmanas?",
        options: ["Maurya", "Sunga", "Satvahana", "Kanvas"],
        answer: "Satvahana"
      },
      {
        id: 2,
        question: "Who was the brother-in-law of Harshavardhan? ",
        options: ["Grahavarmana", "DevGupta", "Banabhatta","None"],
        answer: "Grahavarmana"
      },
      {
        id: 3,
        question: "Who among the following is the author of ‘Indica’?",
        options: ["Ashoka", "Chanakya", "Seleucus", "Megasthenes"],
        answer: "Megasthenes"
      },
      {
        id: 4,
        question: "Which of the following is the equivalent term used for Raja in early vedic era?",
        options: ["Gopati", "Gomat", "Gopa", "Gomitra"],
        answer: "Gopati"
      }
    ]
   }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigateByUrl('/teacher_dashboard');
  }

}
