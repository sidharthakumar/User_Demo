import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styles: [
    `
      .k-grid tr.k-master-row td {border-width: 3;}
      .k-grid table tbody tr td{
      border top: 3px solid white;
      }
   `
  ]
})
export class UserGridComponent implements OnInit {

  @Input() user_list;
  constructor() { }

  ngOnInit() {
    
  }

}
