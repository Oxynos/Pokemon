import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
// import 'rxjs/add/operator/map';

@Injectable()
export class MyServiceService {

  private cache:any = {};
  private cacheTrad:any = {};
  // private obs: Observable<any>;

  constructor(private http: HttpClient) { 
    /*this.obs = new Observable(observer => {
      observer.next(this.cache);
    });*/
  }

  listAll(): Observable<any[]> {
    // sans cache
    /*return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/')
    .map(res => {
      return res.results;
    });*/

    if(!this.cache.all) {
      return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/').pipe(
        map(res => {
          this.cache.all = res.results;
          return this.cache.all;
        })
      );
    } else {
      return of(this.cache.all);
    }
  }

  get(id:string): Observable<any> {
    let getPokemon = this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + id + '/');

    if(!this.cache[id]) {
      return getPokemon.pipe(
        map(pokemon => {
          if(pokemon.detail) {
            return {error: pokemon.detail};
          } else {
            pokemon.type = pokemon.types.filter(type => type.slot==1)[0].type.name;
            this.cache[id] = pokemon;
            return pokemon;
          }
        })
      );
    } else {
      // return this.obs.map(pokemons => pokemons[id]);
      return of(this.cache[id]);
    }
  }

  getName(id:string): Observable<any> {
    let trad = this.http.get<any>('https://pokeapi.co/api/v2/pokemon-species/' + id + '/');

    if(!this.cacheTrad[id]) {
      return trad.pipe(
        map(res => {
          if(res.detail) {
            return {error: res.detail};
          } else {
            // pokemon.nameFr = pokemon.names.filter(name => name.slot==6)[0].name.name;
            // res.nameFr = 
            this.cacheTrad[id] = res.names[6].name;
            return res.names[6].name;
          }
        })
      );
    } else {
      return of(this.cacheTrad[id]);
    }
  }
}
