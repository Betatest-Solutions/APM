import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get(`${this.uri}/form`);
  }
  getInfoById(id) {
    return this.http.get(`${this.uri}/form/${id}`);
  }

  addInfo(name , email, phone, message) {
    const info = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };
    return this.http.post(`${this.uri}/form/add`, info);
  }


}
