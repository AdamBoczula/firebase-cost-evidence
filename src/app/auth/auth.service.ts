import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { app } from '../../../firebase.config';
import { LoginWithEmailUser } from './model/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth: Auth;
  constructor() {
    this._auth = getAuth(app);
  }

  public loginViaEmail(): void {}

  public forgotPassword(): void {}

  public signInWithEmail({ email, password }: LoginWithEmailUser): void {
    signInWithEmailAndPassword(this._auth, email, password);
  }

  public loginViaGoogleAccount(): void {
    signInWithPopup(this._auth, new GoogleAuthProvider());
  }
}
