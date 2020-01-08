import { Injectable }       from '@angular/core';
import {CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor() {}

  canActivateChild(): boolean {
    return localStorage.getItem("childAccess") ? true : false;
    
  }

  
}
