import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  user: any;

  errorMessage!: string;

  responseJson!: string;
  hasApiError = false;

  constructor(private authService: AuthenticationService, private loadingController: LoadingController, private api: ApiService,) { }

  async ngOnInit() {
    // If coming back after logging into Auth0,
    // and using CURRENT Implicit (web) Login
    if (window.location.hash) {
      const loadingIndicator = await this.showLoadingIndictator();
      try {
        await this.authService.handleCallback(window.location.href);
      } catch (e: any) {
        this.errorMessage = e.message;
      } finally {
        loadingIndicator.dismiss();
      }

      this.user = await this.authService.getUserInfo();
    }
  }

  async login() {
    const loadingIndicator = await this.showLoadingIndictator();
    try {
      await this.authService.login();
    } catch (e: any) {
      console.log(`caught error ${e.message}`);
    } finally {
      loadingIndicator.dismiss();
    }
  }

  private async showLoadingIndictator() {
    const loadingIndicator = await this.loadingController.create({
      message: 'Opening login window...'
    });
    await loadingIndicator.present();
    return loadingIndicator;
  }

  async logout() {
    await this.authService.logout();
  }

  callApi() {
    this.api.getWeather$().subscribe({
      next: (res) => {
        this.hasApiError = false;
        this.responseJson = JSON.stringify(res, null, 2).trim();
      },
      error: () => this.hasApiError = true,
    });
  }

}
