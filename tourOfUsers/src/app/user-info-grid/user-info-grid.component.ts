import { Component, OnInit } from '@angular/core';
import { contactInfo } from '../contactInfo'
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-user-info-grid',
  templateUrl: './user-info-grid.component.html',
  styleUrls: ['./user-info-grid.component.css']
})
export class UserInfoGridComponent implements OnInit {
  userInfo: contactInfo[];
  constructor(
    private route: ActivatedRoute,
    private userService: UserService) {
   }

  ngOnInit() {
        // get data using route resolvers
        this.route.data.subscribe((data)=>{
          var info: contactInfo[] = new Array()
          for(var key in data.users.users){
            var temp: contactInfo = {id: data.users.users[key].id, city: data.users.users[key].address.city, phone: data.users.users[key].phone};
            info.push(temp);
          }
          this.userInfo = info;
        })
  }

}
