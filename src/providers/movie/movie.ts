import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  //private baseApiPath = "https://api.themoviedb.org/3";
  private baseApiPath = "http://oporreta.com/wp-json/wp/v2/posts";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }
  getLatestMovies(){
    //return this.http.get(this.baseApiPath + "/movie/popular?api_key=2a0d4310158050fa64811a5ab72fd79e");
    return this.http.get(this.baseApiPath);
  }

}
