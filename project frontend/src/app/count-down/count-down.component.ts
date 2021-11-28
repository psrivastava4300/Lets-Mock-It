import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  mins: number;
  sec: number;
  
  constructor (private router: Router) {
    let interval = setInterval(() => {
      this.sec = this.sec - 1;
      if(this.sec === 0) {
        if(this.mins === 0) {
          this.router.navigate(['result']);
          clearInterval(interval);
        }
        else {
          this.mins = this.mins - 1;
          this.sec = 59;
        }
      }
    }, 1000);
  }


  ngOnInit() {
    this.mins = 0;
    this.sec = 30;
  }

}
