import {Component} from '@angular/core';

@Component({
  selector: 'app-shell-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  provinces = [
    {name: 'Andalucía', code: 'AN'},
    {name: 'Galicia', code: 'GL'},
    {name: 'Islas Baleares', code: 'IB'}
  ];
  constructor() {}
}
