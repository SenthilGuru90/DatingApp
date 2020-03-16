import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Input() valuesFromHome: any;
  @Output() cancelRegisterMode = new EventEmitter();

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  Register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Registered successfully');
      console.log('Registered successfully');
    }, (error) => {
      this.alertify.error('Registration failed');
      console.log(error);
    });
  }

  Cancelled() {
    this.cancelRegisterMode.emit(false);
    console.log('Cancelled successfully');
  }
}
