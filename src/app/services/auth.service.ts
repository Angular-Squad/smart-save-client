import { Injectable } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://tic-tac-toe-wdi-production.herokuapp.com'
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

  onSignIn(credentials){
    // sign in the user
    return this.http.post(this.url + "/sign-in", credentials)
  }

  onChangePassword(passwords){
    return this.http.patch(this.url + "/change-password", passwords, {
        headers: {
          Authorization: 'Token token=' + localStorage.token
        }
      })
  }

  onSignOut(){
    return this.http.delete(this.url + "/sign-out", {
        headers: {
          Authorization: 'Token token=' + localStorage.token
        }
      })
      .subscribe(() => {
        localStorage.removeItem('token')
        console.log(localStorage)
      })
  }
}
