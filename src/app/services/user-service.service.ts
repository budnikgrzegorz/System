import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { User } from '../../model/user';

@Injectable()
export class UserServiceService {
  private userList: Array<User> = [];

  private userListObs = new BehaviorSubject<Array<User>>([]);

  constructor() {}

  add(user: User) {
    this.userList.push(user);
    this.userListObs.next(this.userList);
  }
}
