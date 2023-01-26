import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  numbers:number = 0;
  @Output('addNumberListener') addNumber = new EventEmitter<number>();
  refInterval;


  startGame(){
    this.refInterval = setInterval(()=>{
      this.numbers++;
      this.addNumber.emit(this.numbers);
    },1000);
  }

  finishGame(){
    clearInterval(this.refInterval);
  }
}
