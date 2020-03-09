import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public tab : string = "login";

  public register = {
    email: "",
    password: ""
  }
  public login = {
    email: "",
    password: ""
  }
  constructor(
    public auth: AuthService
  ) {}

  ngOnInit(): void {
  }

  public registerUser() {
    this.auth.registerByEmailAndPassword(this.register.email, this.register.password);
  }
  public loginUser() {
    this.auth.loginByEmailAndPassword(this.login.email, this.login.password);
  }
  public googleLogin() {
    this.auth.googleLogin();
  }
  public facebookLogin() {
    this.auth.facebookLogin();
  }

  public logOut() {
    this.auth.logOut();
  }
}
