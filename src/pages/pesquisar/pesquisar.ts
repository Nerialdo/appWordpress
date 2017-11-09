import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { SinglepostPage } from '../singlepost/singlepost';

/**
 * Generated class for the PesquisarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesquisar',
  templateUrl: 'pesquisar.html',
})
export class PesquisarPage {
  items: string[];
  //url: string = 'http://oporreta.com/wp-json/wp/v2/posts?search="teste"';
  url: string = 'http://oporreta.com/wp-json/wp/v2/posts';
  itemspes:any;
  myParam:any;
  constructor(public navCtrl: NavController, private http: Http, public navParams: NavParams, private nav: NavController, public loadingCtrl: LoadingController) {
    this.initializeItems();
  }

  initializeItems() {
    this.url
  }

  getItemspes(ev) {
    // faz a pesquisa
    let loader = this.loadingCtrl.create({
      content: "Pesquisando ...",
      duration: 3000
    });
    loader.present();
    // fim de fazer a pesquisa
    this.initializeItems();
    this.http.get( this.url + '?search=' + this.myParam )
		.map(res => res.json())
		.subscribe(data => {
      this.itemspes = data;
      
		});
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PesquisarPage');
  }
  itemTapped(event, item) {
		this.nav.push(SinglepostPage, {
		  item: item
		});
	}

  abrirPesquisar(){
    //Vai abrir a tela desejada, onde a mesma deve ser importada, assim, vou achamar a cadastroContaPage
		this.navCtrl.push(PesquisarPage);

  }

}
