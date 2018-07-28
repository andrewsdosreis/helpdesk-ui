import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HELP_DESK_API } from './helpdesk.api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  login(user: User) {
    return this.http.post(`${HELP_DESK_API}/api/auth`, user);
  }

  createOrUpdate(user: User) {
    if (user._id != null && user._id !== '') {
      return this.http.put(`${HELP_DESK_API}/api/user`, user);
    } else {
      user._id = null;
      return this.http.post(`${HELP_DESK_API}/api/user`, user);
    }
  }

  findAll(page: Number, count: Number) {
    return this.http.get(`${HELP_DESK_API}/api/user/${page}/${count}`);
  }

  findById(id: String) {
    return this.http.get(`${HELP_DESK_API}/api/user/${id}`);
  }

  delete(id: String) {
    return this.http.delete(`${HELP_DESK_API}/api/user/${id}`);
  }
}