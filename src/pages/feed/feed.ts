import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo:"Nerialdo Ferreira",
    data:"Maio 5, 1986",
    descricao:"Programador web",
    qntd_liks:12,
    qntd_commnnts:4,
    time_comments:"1h"

  }

  public lista_filmes = new Array<any>();

  //criando variavel
  public nome_usuarios:string = "Nerialdo Ferreira";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) { 

  }

  //criando funções
  public somarDoisNumeros(num1:number, num2:number): void{
      //alert(num1 + num2);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    //this.somarDoisNumeros();
    //this.somarDoisNumeros(10, 50);
    this.movieProvider.getLatestMovies().subscribe(
      data=>{

        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;

        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }

}
