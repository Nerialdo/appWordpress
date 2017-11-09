import { Component } from '@angular/core';
import { SinglepostPage } from '../../pages/singlepost/singlepost';
import { NavController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { PesquisarPage } from '../pesquisar/pesquisar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	//paginação
	itemspg = [];
	  //chamaProd(item : 1){
		//var count = 5;
		//alert(count ++);
		//count++;
		//} 
		//url: string = 'http://oporreta.com/wp-json/wp/v2/posts?filter[orderby]=date&order=asc';
		//url: string = 'http://oporreta.com/wp-json/wp/v2/posts?per_page=15';
		url: string = 'http://oporreta.com/wp-json/wp/v2/posts?per_page=10';
		urlpaginacao: string = 'http://oporreta.com/wp-json/wp/v2/posts';
		urli: string = 'http://oporreta.com/wp-json/wp/v2/posts?categories=1&per_page=1&offset=2';
		items: any;
		itemsi: any;
		itemspaginacao: any;

  constructor(public navCtrl: NavController, private http: Http, private nav: NavController ) {
		//paginação
		for (let i = 0; i < 10; i++) {
      this.itemspg.push( this.itemspg.length );
		}

	 }
	 //paginação
	 doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
				this.itemspg.push( this.itemspg.length );
      }
			
      console.log('Async operation has ended');
			infiniteScroll.complete();	

		}, 500);
		//axibe os posts a partir do 11
		this.http.get( this.urlpaginacao + '?per_page=' + this.itemspg.length + '&offset=10' )
		.map(res => res.json())
		.subscribe(data => {
			this.itemspaginacao = data;
		});
	}
	//fim paginação
  ionViewDidEnter() {
		this.http.get( this.url )
	    .map(res => res.json())
	    .subscribe(data => {
	      // we've got back the raw data, now generate the core schedule data
	      // and save the data for later reference
	      this.items = data;
			});
			
	}
	// executa bloco de destaque
	ionViewDidLoad(){
		this.http.get( this.urli )
		.map(res => res.json())
		.subscribe(data => {
			// we've got back the raw data, now generate the core schedule data
			// and save the data for later reference
			this.itemsi = data;
		});
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
