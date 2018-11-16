import { Component, OnInit } from '@angular/core';
import { CellComponent, CellValue } from '../cell/cell.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private winner = null;
  private player: CellValue = CellValue.X;
  private gameArray = Array(9).fill(null);

  constructor() { }

  ngOnInit() { }

  newGame() {
    this.winner = null;
    this.player = CellValue.X;
    this.gameArray = Array(9).fill(null);
  }

  get checkDraw() {
    const draw = this.gameArray.filter((val) => val);
    if (draw.length === 9) {
      return true;
    }
    return false;
  }

  get gameStatusMessage() {
    return this.winner ? `Player ${this.winner} has won!` :
      this.checkDraw ? 'Game ended in a draw!' :
      `Player ${this.player}'s turn`;
  }

  handleMove(index: number): void {
    if (!this.winner && !this.gameArray[index]) {
      this.gameArray[index] = this.player;
      if (this.winningMove()) {
        this.winner = this.player;
      }
      this.player = this.player === CellValue.X ? CellValue.O : CellValue.X;
    }
  }

  winningMove(): boolean {
    const victoryConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6], // diagonals
    ];
    for (const condition of victoryConditions) {
      if (this.gameArray[condition[0]]
        && this.gameArray[condition[0]] === this.gameArray[condition[1]]
        && this.gameArray[condition[1]] === this.gameArray[condition[2]]) {
          return true;
      }
    }
/*  victoryConditions.forEach((val) => {
      if ( this.gameArray[val[0]]
        && this.gameArray[val[0]] === this.gameArray[val[1]]
        && this.gameArray[val[1]] === this.gameArray[val[2]]) {
        return true;
      }
    }); */
    return false;
  }
}
