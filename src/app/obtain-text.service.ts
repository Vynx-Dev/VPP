import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObtainTextService {
  //httpClient: any;

  constructor(private httpClient: HttpClient) {}
  getRawData(): Observable<any> {
    const api = 'https://raw.githubusercontent.com/wiki/Vynx-Dev/VPP/Documentation.md';
    return this.httpClient.get(api,{ responseType: 'text' });    
  }
}
