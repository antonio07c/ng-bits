import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bit-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
  @Input() bitOrientation: string = "left";
  constructor() { }

  ngOnInit() {
  }

}
