import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'bit-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() bitCloseable: boolean;
  @Input() bitColor: any;
  @Output() bitOnClose = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  onCloseClick(){
    this.bitOnClose.emit();
  }

}
