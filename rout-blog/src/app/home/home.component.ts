import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  homeId:any;

  constructor(private route:ActivatedRoute){}

  ngOnInit():void{

    console.log("home id is ",this.route.snapshot.paramMap.get('id'));
    this.homeId=this.route.snapshot.paramMap.get('id')
  }


}
