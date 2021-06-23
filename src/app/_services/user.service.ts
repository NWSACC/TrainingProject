import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Users } from '../_helpers/interfaces/userDetails';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userList: Users[] = [];
  private modelName: string = "User";
  public usersSubject: Subject<Users[]> = new Subject<Users[]>();

  constructor(private http: HttpService) { }

  getAll(): void {
    this.http.getAll(this.modelName).subscribe(data => {
      this.userList = data;
      this.usersSubject.next(data);
    });
  }

  get(id: number): Users {
    return this.userList[id];
  }
  
  post(user: Users): void {
    this.http.post(this.modelName, user).subscribe(data => {
      this.getAll();
    });
  }

  delete(id: number): void {
    this.http.delete(this.modelName, id).subscribe(data => {
      this.getAll();
    });
  }

  put(user: Users): void {
    this.http.put<Users>(this.modelName, user, user.id).subscribe(data => {
      this.getAll();
    });
  }
}
