import { Component, OnInit } from '@angular/core';
import { contactInfo } from '../contactInfo'
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-info-grid',
  templateUrl: './user-info-grid.component.html',
  styleUrls: ['./user-info-grid.component.css']
})
export class UserInfoGridComponent implements OnInit {
  userInfo: contactInfo[];
  constructor(private userService: UserService) {
   }

  ngOnInit() {
        // initialize user contact info through getContactInfo service
        this.userService.getContactInfo().subscribe((data)=>{
          var info: contactInfo[] = new Array()
          for(var key in data.users){
            var temp: contactInfo = {id: data.users[key].id, city: data.users[key].address.city, phone: data.users[key].phone};
            info.push(temp);
          }
          this.userInfo = info;
        })
  }

}
