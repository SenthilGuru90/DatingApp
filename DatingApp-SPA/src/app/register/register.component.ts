import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Input() valuesFromHome: any;
  @Output() cancelRegisterMode = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  Register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('Registered successfully');
    }, () => { 
      console.log('Registration failed');
    });
    
  }

  Cancelled() {
    this.cancelRegisterMode.emit(false);
    console.log('Cancelled successfully');
  }
}
