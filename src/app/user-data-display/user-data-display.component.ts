import { Component, OnInit } from '@angular/core';

import { Users } from '../_helpers/interfaces/userDetails';
import { UserService } from '../_services/user.service';
import { HttpService } from '../_services/http.service';

import { fromEvent, of, from, Subject, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, mergeMap, map, concatMap, delay, switchMap, exhaustMap, tap, takeLast, first, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-user-data-display',
  templateUrl: './user-data-display.component.html',
  styleUrls: ['./user-data-display.component.css']
})
export class UserDataDisplayComponent implements OnInit {
  submited: boolean;
  UserList: Users[] = [];
  EditingUser: Users = {} as Users;
  count123 = 0;
  query: string;

  testSubscribe: Observable<Users[]>;

  constructor(public userService: UserService,
    private httpService: HttpService) { }

  ngOnInit() {
    this.testSubscribe = this.userService.getAll2();

    // this.userService.usersSubject.subscribe(data => {
    //   this.UserList = data;
    // });
    // this.userService.getAll();
  }

  onEditClick(user: Users) {
    this.EditingUser = {
      id: user.id,
      name: user.name,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      country: user.email,
      address: user.address
    };
  }

  onDeleteClick(id: number) {
    this.userService.delete(id);
  }

}
