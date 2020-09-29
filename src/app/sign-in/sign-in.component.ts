import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {  AuthService } from './../services/auth.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  signinForm
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.signInForm = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  ngOnInit(): void {
  }

  signIn(userData){
    let credentials = {
      email: userData.email,
      password: userData.password
    }
    console.log(credentials)

    this.authService.onSignIn({credentials})
      .subscribe(response => {
        console.log(response)
        window.alert("You signed in successfully")
      })

    this.signInForm.reset()
  }
}
