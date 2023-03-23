import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.users; // get data
    this.userService.loadAllUsers();

    this.users.subscribe((data) => console.log(data));
  }
}
