import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/router";
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let id = +route.paramMap.get('id');
    if( isNaN(id) || id < 1) {
      alert("Invalid product id");
      this.router.navigate(["/products"]);
      return false;
    }
    return true;
  }

}
