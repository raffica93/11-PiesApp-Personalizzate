import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero/hero.interface';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent {
  UpperCase = false;
  orderBy? :keyof Hero

  hero: Hero[] = [{
    name: 'Windstorm',
    canFly: true,
    color: Color.red
  }, {
    name: 'Superman',
    canFly: true,
    color: Color.blue
  }, {
    name: 'Batman',
    canFly: false,
    color: Color.black
  }, {
    name: 'Spiderman',
    canFly: false,
    color: Color.green
  }, {
    name: 'Ironman',
    canFly: true,
    color: Color.red
  }]



  toggleUpperCase() {
    this.UpperCase = !this.UpperCase;
  }


}
