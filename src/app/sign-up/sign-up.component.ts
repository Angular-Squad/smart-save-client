import { Component, OnInit } from '@angular/core';

import {  AuthService } from './../services/auth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(authService: AuthService) { }

  ngOnInit(): void {
  }

  signUp(userData){
    this.authService.onSignUp(userData)
      .subscribe(response => {
        this.user = response
        console.log(this.user)
        window.alert("You signed up successfully")
      })
  }

}
