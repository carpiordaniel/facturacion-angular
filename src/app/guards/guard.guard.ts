import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../service/login.service';	
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {

    const token = localStorage.getItem('token');
    if ( !token ) {
      this.router.navigate(['/login']); 
      return false; // Usuario autenticado, permite el acceso a la ruta
    } else {
      // Usuario no autenticado, redirige al componente de login
      // this.router.navigate(['/app/cliente']); 
      return true;
    }
   
    
  }
};
