import { Component } from '@angular/core';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  users:any;
  constructor(private uersData:UserdataService)
  {
    uersData.user().subscribe((data)=>{
      console.log('data',data)
      this.users=data
    })
  }
  ngOninit(){
    
  }

}
