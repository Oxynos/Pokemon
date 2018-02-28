import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
// import 'rxjs/add/operator/map';

@Injectable()
export class MyServiceService {

  private pokemons:any = {};
  // private obs: Observable<any>;

  constructor(private http: HttpClient) { 
    /*this.obs = new Observable(observer => {
      observer.next(this.pokemons);
    });*/
  }

  listAll(): Observable<any[]> {
    // sans cache
    /*return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/')
    .map(res => {
      return res.results;
    });*/

    if(!this.pokemons.all) {
      return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/').pipe(
        map(res => {
          this.pokemons.all = res.results;
          return this.pokemons.all;
        })
      );
    } else {
      return of(this.pokemons.all);
    }
  }

  get(id:string): Observable<any> {
    // sans cache
    /*return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + id)
    .map(pokemon => {
      if(pokemon.detail) {
        return {error: pokemon.detail};
      } else {
        pokemon.type = pokemon.types.filter(type => type.slot==1)[0].type.name;
        return pokemon;
      }
    });*/

    if(!this.pokemons[id]) {
      return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + id).pipe(
        map(pokemon => {
          if(pokemon.detail) {
            return {error: pokemon.detail};
          } else {
            pokemon.type = pokemon.types.filter(type => type.slot==1)[0].type.name;
            this.pokemons[id] = pokemon;
            return pokemon;
          }
        })
      );
    } else {
      // return this.obs.map(pokemons => pokemons[id]);
      return of(this.pokemons[id]);
    }
  }
}
