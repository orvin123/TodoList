import { Component } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

//* services
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login = new FormGroup({
    user:new FormControl('',[Validators.required]),
    pass:new FormControl('',[Validators.required])
  })
  constructor(private auth:AuthService){

  }


  
onLogin(){

    this.auth.login(this.login)

}
}
