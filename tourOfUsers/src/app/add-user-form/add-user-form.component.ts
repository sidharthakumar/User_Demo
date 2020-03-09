import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms'
import { UserService } from '../user.service';
import { User } from '../user'

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})


export class AddUserFormComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  newUser:User = {id:0, name:'', email:''};
  companies : String[]
  form: FormGroup;
  hasCompany: boolean = false
  constructor(private userService: UserService, private fb: FormBuilder) { }

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
        ])),
        // nested company form
        companyInfo: this.fb.group({
          name: [''],
          street: ['']
        })
      });

      this.userService.getCompanies().subscribe((data)=>
      {
        var cmp: String[] = new Array()
        for(var key in data.users){
          var temp = data.users[key].company.name
          cmp.push(temp);
        }
        this.companies = cmp;
      });
  }
  /*
  Once user clicks on add user button, 
  add created user to user list and 
  submit change to graphQL to trigger
  a mution
  */
  onSubmit(){
    console.log(this.form.value)
    this.newUser = {id:Number(this.form.value.id), name:this.form.value.name, email:this.form.value.email};
    this.valueChange.emit(this.newUser);
    
    //reset form values and validators
    this.form.reset();
    this.form.get('companyInfo').get('street').clearValidators()
    this.form.get('companyInfo').get('street').updateValueAndValidity()
    //reset hasCompany flag
    this.hasCompany = false;
  }

  addCompany(){
    this.hasCompany = true;
    this.setValidation();
  }

  setValidation(){
    const streetControl = this.form.get('companyInfo').get('street')
    const nameControl = this.form.get('companyInfo').get('name')
    nameControl.valueChanges.subscribe(name => {
      if(name != null){
        if (name.length > 0){
          streetControl.setValidators([Validators.required])
          streetControl.updateValueAndValidity();
        }
      }
    })
  
  }
}
