import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://stark-dawn-63091.herokuapp.com'
  signUpForm: FormGroup;
  
  constructor(formBuilder: FormBuilder, private http: HttpClient) {
    this.signUpForm = formBuilder.group({
      email: '',
      password: '',
      password_confirmation: ''
    })
  }

  onSignUp(userData): Observable<any>{
  // sign in the user
   return this.http.post(this.url + "/sign-up",
     { credentials: {
        email: userData.email,
        password: userData.password,
        password_confirmation: userData.password_confirmation
      }
     });
  this.signUpForm.reset()
}
}
