import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[]= [];

  onNumberAdded(data:number){
    data%2 == 0? this.evenNumbers.push(data) : this.oddNumbers.push(data);
  }
}
