import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { templateJitUrl } from '@angular/compiler';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // initialize service with apollo
  data: Observable<any>;
  contact: Observable<any>;
  company: Observable<any>;
  constructor(private apollo : Apollo) { }

  /* 
  query graphQL db using apollo
  to retrieve users and return
  an observable   
  */ 
  getUsers(){
    const UsersQuery =  gql`
      {
        users {
          id
          name
          email
          }
       }
    `;
    this.data =  this.apollo.
    watchQuery({query:UsersQuery}).
    valueChanges.pipe(map(({data}) => data));
    return this.data
  }
  /*
  mutate graphQL DB to add a user
  that was created through add
  user form 
  */
  mutate(user :User){
  const mutationQuery = gql`
    mutation createUser($email: String!, $name:String!, $id:Float!){
      createUser(user:{email:$email, name:$name, id:$id}){
        name
        email
        id
        }
    }            
  `;
  //apollo used to interact with
  //Graph QL
  this.apollo.mutate({
    mutation: mutationQuery, 
    variables:{
      email : user.email,
      name : user.name,
      id : user.id
    }
  }).subscribe()
  }

  getContactInfo(){
    const contactQuery =  gql`
      {
      users{
        id,
        address{
          city
        }
        phone
      }
    }
  `;
   this.contact =  this.apollo.
   watchQuery({query:contactQuery}).
   valueChanges.pipe(map(({data}) => data));
   return this.contact
  }

  getCompanies(){
    const contactQuery =  gql`
      {
        users{
          company{
            name
          }
        }
      }
    `;
    this.company =  this.apollo.
    watchQuery({query:contactQuery}).
    valueChanges.pipe(map(({data}) => data));
    return this.company
  }
}



