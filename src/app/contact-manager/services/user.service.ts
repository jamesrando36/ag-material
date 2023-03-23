import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private dataStore: {
    users: User[];
  };

  private _users: BehaviorSubject<User[]>;

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  // get all users from external api
  loadAllUsers() {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';

    return this.http.get<User[]>(usersUrl).subscribe(
      (data) => {
        this.dataStore.users = data;
        this._users.next(Object.assign({}, this.dataStore).users);
      },
      (error) => {
        console.log('Error - Failed to retrieve users');
      }
    );
  }


  userById(id: number) {
    return this.dataStore.users.find(x => x.id == id);
  }
}
