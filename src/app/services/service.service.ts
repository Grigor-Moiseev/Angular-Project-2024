import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public apiUrl: HttpClient) { }

  getData() {
    return this.apiUrl.get<any[]>('https://grigor-moiseev.github.io/menu-api-data/menu-data.json')
  }
}
