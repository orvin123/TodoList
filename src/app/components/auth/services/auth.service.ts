import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() { }

    //* log in
    login(auth:FormGroup): void{
        console.log(auth.value);
        
    }
    
}