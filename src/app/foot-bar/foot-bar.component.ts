import { Component, OnInit } from '@angular/core';
//import {Http, Headers} from '@angular/http';

@Component({
  selector: 'app-foot-bar',
  templateUrl: './foot-bar.component.html',
  styleUrls: ['./foot-bar.component.css']
})
export class FootBarComponent implements OnInit {

   nYear : number;

  //tweets : string[];

  constructor() {
    this.nYear = new Date().getFullYear();
   }

  // constructor(private http: Http) { }

  // getTweets(){
  //   var headers = new Headers();
    
  //   headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
  //   this.http.get('http://twitter.com/statuses/user_timeline/kraulain.json', {headers: headers}).subscribe((res) => {
  //     console.log(res);
  //   });
  // }

  ngOnInit() {
  }

}


