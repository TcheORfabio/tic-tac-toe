import { Component, OnInit, Input } from '@angular/core';

export enum CellValue {
  empty = '',
  X = 'X',
  O = 'O',
}

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() public value: CellValue = CellValue.empty;
  constructor() { }

  ngOnInit() {
  }
}
