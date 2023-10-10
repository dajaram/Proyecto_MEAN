import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;

  userService = inject(UsersService);
  router = inject(Router);

  constructor() {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  async onSubmit() {
    const res = await this.userService.login(this.formulario.value);
    if(!res.error) {
      localStorage.setItem('user_token', res.token);
      this.router.navigate(['/products'])
    }

  }
}

