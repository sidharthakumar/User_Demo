import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { User } from '../user'

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})


export class AddUserFormComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  newUser:User = {id:0, name:'', email:''};
  
  form: FormGroup;
  constructor() { }

  ngOnInit() {
      this.form = new FormGroup({
        id: new FormControl('',Validators.compose([
          Validators.required,
          // regex to only allow numbers
          Validators.pattern('^[0-9]*$')
        ])),
        name: new FormControl('', Validators.compose([
          Validators.required
        ])),
        // regex to check email
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('[^@]+@[^\.]+\..+')
        ]))
      });
  }
  /*
  Once user clicks on add user button, 
  add created user to user list and 
  submit change to graphQL to trigger
  a mution
  */
  onSubmit(values: User){
    this.newUser = {id:Number(values.id), name:values.name, email:values.email};
    this.valueChange.emit(this.newUser);
    this.form.reset();
  }

}
