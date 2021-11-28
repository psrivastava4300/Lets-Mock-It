import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {

  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  
  openForm(content) {
    this.modalService.open(content, { centered: true});
  }

  onSubmit() {

  }

}
