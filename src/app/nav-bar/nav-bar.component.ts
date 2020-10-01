import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {  AuthService } from './../services/auth.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public authService: AuthService) { }


  // signOut(){
  //   this.authService.onSignOut()
  // }
  //
  // logged(){
  //   this.authService.isLoggedIn()
  //   console.log("this is logged or not", this.authService.isLoggedIn())
  // }

  // logged(){
  //   if(this.authService.isLoggedIn() === true){
  //     this.isLogged = true
  //   }else{
  //     this.isLogged = false
  //   }
  //   console.log("isLogged", this.isLogged)
  // }

  ngOnInit(): void {
  }

}
