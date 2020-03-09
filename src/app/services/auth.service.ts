import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user = null ;
  constructor(
    private auth: AngularFireAuth
  ) {

    this.auth.authState.subscribe(data => {
      if (data) {
        console.log("logged in");
        const user = {
          uid: data.uid,
          name: data.displayName,
          email: data.email,
          photo: data.photoURL,
          provider: data.providerData[0].providerId
        };
      }else {
        this.user = null;
      }
    });
  }


  public async registerByEmailAndPassword(email: string, password: string) {
    const credentials = await 
    this.auth.auth.createUserWithEmailAndPassword(email, password);
    console.log(credentials);
  }
  public async loginByEmailAndPassword(email: string, password: string) {
    const credentials = await 
    this.auth.auth.signInWithEmailAndPassword(email, password);
    console.log("User:", credentials);
  }

  public async logOut() {
    await this.auth.auth.signOut();
  }

  public async googleLogin() {
    const data = await this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    console.log("google login:" , data);
  }
  public async facebookLogin() {
    this.auth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }



}
