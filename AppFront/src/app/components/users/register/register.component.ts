import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  router = inject(Router); 

  formulario: FormGroup;

  constructor(private userService: UsersService){
    this.formulario = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(), 
    })
  }
  async onSubmit(){
    const res = await this.userService.register(this.formulario.value);
    console.log(res)
    this.router.navigate(['/login']);
  }
}
