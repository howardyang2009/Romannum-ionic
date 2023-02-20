import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { LoadingController } from "@ionic/angular";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  user: any;

  errorMessage!: string;

  responseJson!: string;

  constructor(
    private authService: AuthenticationService,
    private loadingController: LoadingController,
    private api: ApiService
  ) {}

  async ngOnInit() {
    // If coming back after logging into Auth0,
    // and using CURRENT Implicit (web) Login
    if (window.location.hash) {
      const loadingIndicator = await this.showLoadingIndictator(
        "callbacking..."
      );
      try {
        await this.authService.handleCallback(window.location.href);
      } catch (e: any) {
        this.errorMessage = e.message;
      } finally {
        loadingIndicator.dismiss();
      }
    }

    this.user = await this.authService.getUserInfo();
  }

  async login() {
    const loadingIndicator = await this.showLoadingIndictator(
      "Opening login window..."
    );
    try {
      await this.authService.login();
    } catch (e: any) {
      this.errorMessage = e.message;
    } finally {
      loadingIndicator.dismiss();
    }
  }

  async logout() {
    const loadingIndicator = await this.showLoadingIndictator(
      "Opening logout window..."
    );
    try {
      await this.authService.logout();
    } catch (e: any) {
      this.errorMessage = e.message;
    } finally {
      loadingIndicator.dismiss();
    }
  }

  async callApi() {
    const loadingIndicator = await this.showLoadingIndictator("calling API...");
    try {
      const response = await this.api.getWeather$();
      response
        .subscribe({
          next: (res) => {
            this.errorMessage = "";
            this.responseJson = JSON.stringify(res, null, 2).trim();
          },
          error: (e: any) => (this.errorMessage = e.message),
        })
        .add(() => {
          loadingIndicator.dismiss();
        });
    } catch (e: any) {
      this.errorMessage = e.message;
    } finally {
    }
  }

  private async showLoadingIndictator(msg: string) {
    const loadingIndicator = await this.loadingController.create({
      message: msg,
    });
    await loadingIndicator.present();
    return loadingIndicator;
  }
}
