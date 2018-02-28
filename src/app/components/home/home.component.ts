import { Component, OnInit, Input } from '@angular/core';

import { POKEMONS } from '../../config';
import { MyServiceService } from '../../my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() message: string;
  @Input() message2: string;

  isLoading:boolean = false;

  defaultClasses:string = 'btn btn-primary btn-special';

  pokemons:any[];

  constructor(private myService:MyServiceService) { }

  ngOnInit() {
    this.myService.listAll().subscribe(res => {
      this.pokemons = [];
      res.forEach(element => {
        // this.isLoading = false;
        var str = "Apples are round, and apples are juicy."; 
        var splitted = element.url.split("/", 7); 
        let id = splitted[6];
        let pokemon = {name:element.name, id:id, nameFr:""};
        // pokemon.name = element.name;
        this.myService.getName(id).subscribe(res => {
          pokemon.name = res;
        });
        this.pokemons.push(pokemon);
      });
    });
  }

  getClasses(pokemon:any) {
    return {
        grass: pokemon.type == 'grass',
        electric: pokemon.type == 'electric',
        fire: pokemon.type == 'fire',
        aqua: pokemon.type == 'aqua',
        small: pokemon.size < 50,
        medium: pokemon.size < 100 && pokemon.size >= 50,
        big: pokemon.size >= 100
    }
  }

  changeMessage() {
    this.message = 'This is a new message';
  }

  isStronger(pokemon:any) {
    let max_pv = Math.max(...this.pokemons.map(pok => pok.pv));
    return (pokemon.pv == max_pv)
  }

}
