import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';



/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {
  urlcat: string = 'http://oporreta.com/wp-json/wp/v2/posts';
  listarCat: string = 'http://oporreta.com/wp-json/wp/v2/categories';
  itemscat:any;
  myParam: number = 1;
  listcat:any;

  constructor(public navCtrl: NavController, private http: Http, public navParams: NavParams, public loadingCtrl: LoadingController) {
    
  }
  
  changeSelect(){
    this.http.get( this.urlcat + '?categories=' + this.myParam )
		.map(res => res.json())
		.subscribe(data => {
			// we've got back the raw data, now generate the core schedule data
			// and save the data for later reference
      this.itemscat = data;
      let loader = this.loadingCtrl.create({
        content: "Aguarde...",
        duration: 3000
      });
      loader.present();
		});
  }

  //pushParams() {
 //   this.navCtrl.push(CategoriasPage, { 'myParam': this.myParam });
  //}

  ionViewWillLeave(){
    this.http.get( this.listarCat )
		.map(res => res.json())
		.subscribe(data => {
			this.listcat = data;
    });
  }
 
  ionViewDidLoad() {
    //listar as categorias
    console.log('ionViewDidLoad CategoriasPage');
  }

}
