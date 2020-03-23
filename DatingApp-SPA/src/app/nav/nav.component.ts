import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authservice: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authservice.login(this.model).subscribe(next => {
      console.log(this.model.username + ': you have logged in successfully');
      this.alertify.success(this.model.username + ': you have logged in successfully');
    }, error => {
      console.log(error);
      this.alertify.error('Login failed');
    }, () => {
      this.router.navigate(['/member']);
    });
  }

  loggedIn() {
    return this.authservice.LoggedIn();
  }

  loggedOut() {
    return localStorage.removeItem('token');
  }

}
