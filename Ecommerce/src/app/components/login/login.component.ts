import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };

  constructor(private router: Router) {}

  onLoginSubmit(form: any) {
    if (form.valid) {
      console.log('Login Data:', this.loginData);
      this.router.navigate(['/']); 
    }
  }

}
