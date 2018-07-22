import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  tweets = []
  api_endpoint = 'http://localhost:3000/api/tweets'

  constructor(public navCtrl: NavController, private http:HttpClient) {

  }

  ngOnInit(){
    this.get_tweets();
  }

  get_tweets(){
    this.http.get(this.api_endpoint).subscribe((result:any)=>{
      console.log(result.datas)
      if(result.status == 200){
        this.tweets = result.datas
      }
    })
  } 

}
