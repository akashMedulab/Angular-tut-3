import { Component } from '@angular/core';
import { UserdataService } from './service/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service';
  users:any;
 constructor(private userdata:UserdataService){
  console.log("userdata", userdata.users())
  this.users = userdata.users()
  }
}
