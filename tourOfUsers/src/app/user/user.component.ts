import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) { }
  /*
  On init query graphQL server to retrieve 
  list of users and populate kendo grid
  with such users
  */
  async ngOnInit() {
    // initialize users by using getUsers service
    this.userService.getUsers().subscribe((data)=>
    {
      this.users = data.users;
    });
  }
  /*
  Add submitted user to grid and
  make call to mutate service to 
  add user to graphQL data
  */
  addUser(user:User){
    this.users.push(user);
    this.userService.mutate(user);
  }
}
