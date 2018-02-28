import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private name:any;
  private type:any;

  constructor() { }

  ngOnInit() {
  }

  doSomething(data) {
    console.log(data);
    console.log(data.value.pokemonName);
  }
}
