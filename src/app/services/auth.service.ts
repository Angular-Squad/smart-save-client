import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://stark-dawn-63091.herokuapp.com'
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.signUpForm = this.formBuilder.group({
      email: '',
      password: '',
      password_confirmation: ''
    })
  }

  onSignUp(userData){
  // sign in the user
  this.http.post<any>(
    this.url + "/sign-up/",
     { credentials: {
        email: userData.email,
        password: userData.password,
        password_confirmation: userData.password_confirmation
      }
     })
  this.signUpForm.reset()
}
}
