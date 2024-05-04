import { Component, OnInit, importProvidersFrom, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { UserCardComponent } from './users/components/user-card/user-card.component';
import { UsersService } from './users/users.service';
import { NgFor } from '@angular/common';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { User } from './users/models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCardComponent, NgFor],
  styles: `
    .users-container{
      display: flex;
      gap:1rem;
      flex-wrap: wrap;
      align-items:center;
    flex: 0 0 33.3333%;

    }
  `,
  template: `
    <div class="users-container">
      @for (user of users; track user.id) {
      <app-user-card [user]="user"/>
      }
    </div>
    `,
})
export class App implements OnInit {


  private readonly usersService = inject(UsersService);
  users: User[];

  ngOnInit(): void {

    this.usersService.getUsers().subscribe({
      next: (users: User[]) => {

        this.users = users;
      }
    })
  }


}
importProvidersFrom(HttpClientModule)
bootstrapApplication(App, {
  providers: [UsersService, provideHttpClient(withFetch())]
});
