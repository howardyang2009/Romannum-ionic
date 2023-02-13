import { Injectable } from '@angular/core';
import { IonicAuth, IonicAuthOptions } from '@ionic-enterprise/auth';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

const auth0CapacitorConfig : IonicAuthOptions = {
  // the auth provider
  authConfig: 'auth0',
  // The platform which we are running on
  platform: 'capacitor',
  // client or application id for provider
  clientID: '75pnuXFMTfcaEskVMmQ9afyGvMd8h5fs',
  // the discovery url for the provider
  // OpenID configuration
  discoveryUrl: 'https://dev-zz6l6vh5zbtvl46m.us.auth0.com/.well-known/openid-configuration',
  // the URI to redirect to after log in
  redirectUri: 'http://localhost:8100/tabs/auth',
  // requested scopes from provider
  scope: 'openid offline_access email picture profile read:weather',
  // the audience, if applicable
  audience: 'https://afs-oca-apim-tryit.azure-api.net/WeatherForecast',
  // the URL to redirect to after log out
  logoutUrl: 'http://localhost:8100/tabs/auth',
  // The type of iOS webview to use. 'shared' will use a webview that can share session/cookies
  // on iOS to provide SSO across multiple apps but will cause a prompt for the user which asks them
  // to confirm they want to share site data with the app. 'private' uses a webview which will not
  // prompt the user but will not be able to share session/cookie data either for true SSO across
  // multiple apps.
  iosWebView: 'private'
};

const auth0WebConfig : IonicAuthOptions = {
  // the auth provider
  authConfig: 'auth0',
  // The platform which we are running on
  platform: 'web',
  // client or application id for provider
  clientID: '75pnuXFMTfcaEskVMmQ9afyGvMd8h5fs',
  // the discovery url for the provider
  // OpenID configuration
  discoveryUrl: 'https://dev-zz6l6vh5zbtvl46m.us.auth0.com/.well-known/openid-configuration',
  // the URI to redirect to after log in
  redirectUri: 'http://localhost:8100/tabs/auth',
  // requested scopes from provider
  scope: 'openid offline_access email picture profile read:weather',
  // the audience, if applicable
  audience: 'https://afs-oca-apim-tryit.azure-api.net/WeatherForecast',
  // the URL to redirect to after log out
  logoutUrl: 'http://localhost:8100/tabs/auth',
  // The type of iOS webview to use. 'shared' will use a webview that can share session/cookies
  // on iOS to provide SSO across multiple apps but will cause a prompt for the user which asks them
  // to confirm they want to share site data with the app. 'private' uses a webview which will not
  // prompt the user but will not be able to share session/cookie data either for true SSO across
  // multiple apps.
  iosWebView: 'private',
  implicitLogin: 'CURRENT'
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends IonicAuth {
  private router: Router;

  constructor(platform: Platform, router: Router) {
    // Determine whether to run on mobile or the web
    const selectedConfig = platform.is('capacitor') ? auth0CapacitorConfig : auth0WebConfig;
    super(selectedConfig);
    this.router = router;
  }

  async getUserInfo() {
    return await super.getIdToken();
  }

  override onLoginSuccess() {
    this.router.navigate(['tabs/auth']);
  }

  override onLogout() {
    this.router.navigate(['tabs/auth']);
  }
}

