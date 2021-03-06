import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {  
  @Input() bitType: string = 'default';  
  @Input() disabled: boolean;
  constructor() { }

  ngOnInit() {    
  }

}
