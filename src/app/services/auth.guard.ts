import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authentication: AuthenticationService,
    private navCtrl: NavController) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const authed = await this.authentication.isAuthenticated();
    if (authed) {
      return true;
    } else {
      this.navCtrl.navigateRoot('/tabs/auth');
      return false;
    }
  }

}
