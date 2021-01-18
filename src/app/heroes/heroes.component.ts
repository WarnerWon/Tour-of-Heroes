import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { Heroe } from '../Modelos/heroe';
import { HEROES } from './Lista_importada/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  showsection = false;

  heroe: Heroe = {
    id: 1,
    name: 'Windstorm',
    score: 5

  }

  show() {
    if (this.showsection == false) {
      this.showsection = true;  
    } else {
      this.showsection = false;
    }
  }

  showDetails(h : Heroe){
    this.heroe = h
  }

  edit(h){
    this.heroes.some(element => {
      if (h.id == element.id){
        element = h;
        return true;
      }
    });
  }
  save(h){
    let newHeroe = h
    this.heroes.push(newHeroe);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
