import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the SinglepostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singlepost',
  templateUrl: 'singlepost.html',
})
export class SinglepostPage {
  errorMessage: any;
  results: any;
  urlcom: string = 'http://oporreta.com/wp-json/wp/v2/comments';
  criarcomm: string ='http://oporreta.com/wp-json/wp/v2/comments';
  selectedItem: any;
  coment: any;
  age:any;
  name: string = "";
  email:any;
  mesangeerro: string="";

  @ViewChild('form') form: NgForm;
  
  constructor(public navCtrl: NavController, private http: Http, navParams: NavParams, public loadingCtrl: LoadingController) {
    this.selectedItem = navParams.get('item');
    alert(this.selectedItem.id);
    //exibir comentarios
    this.http.get( this.urlcom + '?post=' + this.selectedItem.id)
    .map(res => res.json())
    .subscribe(data => {
      this.coment = data;
    });
  }
  comentar(form) {
    //alert("Login");
    //console.log(form.value)
    //this.http.get(this.name);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');

    let body = {
      message: ""
    }
    //http://oporreta.com/wp-json/wp/v2/comments?author=Your%20Name%20Here&author_email=your-email-address@website-address-here.com&author_name=Your%20Name%20Here&content=Your%20Comment%20Here&post=1604252
    this.http.post( this.urlcom + '?post=' + this.selectedItem.id + '&content='+ this.age + '&author_email=' + this.email + '&author_name=' + this.name, JSON.stringify(body), {headers: headers})
    .map(res => res.json())
    .subscribe(data => this.results = data
      , error => {
          this.errorMessage = error;
          //alert(this.errorMessage);
          this.mesangeerro = "Ocorreu um erro! Revise seus dados e tente novamente";
      })
    //limpa os campos
    this.name = "";
    this.email = "";
    this.age = "";

  }
  postRequest() {
      alert("Passou");
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SinglepostPage');

  }

}

