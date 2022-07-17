import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// Check here if token is exist or not
  constructor(private router: Router) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if(!token) {
      this.router.navigate(['/']);
      return false;
    }else{
      return true;
    }
  }
}
