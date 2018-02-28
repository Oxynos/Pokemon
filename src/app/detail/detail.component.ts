import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { POKEMONS } from '../config';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  pokemon:any;
  trad:any;
  error:string;
  isLoading:number = 0;

  constructor(private route: ActivatedRoute,
    private location: Location, private myService: MyServiceService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.myService.get(params.id).subscribe(res => {
        this.isLoading++;
        this.pokemon = res;
      });

      this.myService.getName(params.id).subscribe(res => {
        this.isLoading++;
        this.trad = res;
      });
    });
  }

}
