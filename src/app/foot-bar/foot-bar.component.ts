import { Component, OnInit } from '@angular/core';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

@Component({
  selector: 'app-foot-bar',
  templateUrl: './foot-bar.component.html',
  styleUrls: ['./foot-bar.component.css']
})
export class FootBarComponent implements OnInit {

   nYear : number;

  constructor( ){
    this.nYear = new Date().getFullYear();
   }

  ngOnInit() {
  }

}


