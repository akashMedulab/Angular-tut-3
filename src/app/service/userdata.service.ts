import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users(){
    return[
      {name:"akash",email:"akashmourya@edulab.in", age:21},
      {name:"kunal",email:"kunal@edulab.in", age:21},
      {name:"shivram",email:"shivram@edulab.in", age:21},
      {name:"ajit",email:"ajit@edulab.in", age:21}
    ]
  }
}
