import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  aboutId:any;
  constructor(private route:ActivatedRoute){}

  ngOnInit():void{

    console.log("about id is ",this.route.snapshot.paramMap.get('id'));

    this.aboutId=this.route.snapshot.paramMap.get('id')
  }


}
