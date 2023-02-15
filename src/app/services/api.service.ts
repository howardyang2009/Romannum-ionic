import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUri: string = 'https://afs-oca-apim-tryit.azure-api.net/WeatherForecast';

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  getWeather$(): Observable<any> {
    const token: string = this.auth.getToken();

    const header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
    }
    // console.log(this.apiUri);
    return this.http.get(this.apiUri, header);
  }
}
