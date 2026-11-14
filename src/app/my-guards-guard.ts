import { CanActivateFn } from '@angular/router';
import { MyServiceAuth } from './my-service-auth';
import { inject, Inject } from '@angular/core';
import { Router } from '@angular/router';
export const myGuardsGuard: CanActivateFn = (route, state) => {

  let myserv = inject(MyServiceAuth);
  let router = inject(Router);

  var token = localStorage.getItem('token')
  if(token=="true"){
    return true;
  } else{
    router.navigate(['/Login']) 
    return false;
  }
  if(myserv.token == true) {
        return true;
  } else{

    router.navigate(['/Login'])
    return false;
  }
};
