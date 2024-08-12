import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  createUserWithEmailAndPassword,
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

  public loginViaEmail({ email, password }: LoginWithEmailUser): void {
    signInWithEmailAndPassword(this._auth, email, password);
  }

  public resetPassword({ email }: Pick<LoginWithEmailUser, 'email'>): void {}

  public signInWithEmail({ email, password }: LoginWithEmailUser): void {
    createUserWithEmailAndPassword(this._auth, email, password);
  }

  public loginViaGoogleAccount(): void {
    signInWithPopup(this._auth, new GoogleAuthProvider());
  }
}
