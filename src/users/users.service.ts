import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserAdapter } from './adapters/user-adapter';
import { UserDTO } from './models/user-dto';
import { User } from './models/user';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly _http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this._http.get<UserDTO[]>('https://jsonplaceholder.typicode.com/users/')
      .pipe(map((users: UserDTO[]) => users.map(UserAdapter.toUser)));
  }
}
