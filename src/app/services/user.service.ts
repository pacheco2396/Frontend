import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User;
  Users: User[];
  readonly URL_API = 'http://localhost:9000/api/user';

  constructor(private http: HttpClient) {
    this.selectedUser = new User();
  }

  postUser(user: User) {
    return this.http.post(this.URL_API, user);
  }

  postValidUser(user: User) {
    return this.http.post(this.URL_API + '/validar', user);
  }

  setUser(user) {
    localStorage.setItem("userApp", user);
  }

  deleteUser() {
    localStorage.removeItem("userApp");
  }

  getUser() {
    return localStorage.getItem("userApp");
  }
}
