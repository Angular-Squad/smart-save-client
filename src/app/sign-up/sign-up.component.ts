import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  AuthService } from './../services/auth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  userData: any = {};
  user: any;

  constructor(formBuilder: FormBuilder, private authService: AuthService) { 
    this.signUpForm = formBuilder.group({
      email: '',
      password: '',
      password_confirmation: ''
    })
  }

  ngOnInit(): void {
  }
onSubmit(): void {
    this.authService.onSignUp(this.userData)
      .subscribe(response => {
        this.user = response
        console.log(this.user)
        window.alert("You signed up successfully")
      })
      this.signUpForm.reset()
  }

}
