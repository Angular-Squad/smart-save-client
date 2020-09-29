import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {  AuthService } from './../services/auth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm
  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      email: '',
      password: '',
      password_confirmation: ''
    })
  }

  ngOnInit(): void {
  }

  signUp(userData){
    console.log(userData.email)
    let credentials = {
      email: userData.email,
      password: userData.password,
      password_confirmation: userData.password_confirmation
    }
    console.log(credentials)

    this.authService.onSignUp({credentials})
      .subscribe(response => {
        console.log(response)
        window.alert("You signed up successfully")
      })
    this.signUpForm.reset()
  }

}
