import { Injectable } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://warm-woodland-06371.herokuapp.com'
  constructor(private http: HttpClient) {
    // this.signUpForm = this.formBuilder.group({
    //   email: '',
    //   password: '',
    //   password_confirmation: ''
    // })
  }

  onSignUp(credentials){
  // sign in the user
  return this.http.post(this.url + "/sign-up", credentials)
  }
}
