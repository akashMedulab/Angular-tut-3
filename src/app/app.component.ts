import { Component } from '@angular/core';
import { UserdataService } from './service/userdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'call api ';
    users:any;
  constructor(private uersData:UserdataService)
  {
    uersData.user().subscribe((data)=>{
      console.log('data',data)
      this.users=data
    })
  }
 
}