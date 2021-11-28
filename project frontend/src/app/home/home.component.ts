import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../../services/authservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() loginType = -1;
  isLoggedIn = localStorage.getItem('ACCESS_TOKEN') !== null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    // this.authService.logout();
    this.router.navigateByUrl('/login');
    this.isLoggedIn = false;
  }

  isTeacher() {
    return this.loginType === 0;
  }

  isStudent() {
    return this.loginType === 1;
  }

  loggedIn() {
    return this.loginType !== -1;
  }

}
