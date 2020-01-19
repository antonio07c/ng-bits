import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bit-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  @Input() bitText: string;
  @Input() bitValue: string;
  @Input() bitStyle: string; 

  //add on text click and on value click
  constructor() { }

  ngOnInit() {
  }

}
