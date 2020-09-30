import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {  AuthService } from './../services/auth.service'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.changePasswordForm = this.formBuilder.group({
      old: '',
      new: ''
    })
  }

  ngOnInit(): void {
  }

  changePassword(change){
    let passwords = {
      old: change.old,
      new: change.new
    }

    this.authService.onChangePassword({passwords})
      .subscribe(response => {
        window.alert("You changed passwords successfully")
      })

    this.changePasswordForm.reset()
  }

}
