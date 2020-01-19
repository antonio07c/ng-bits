import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bit-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() bitTitle: string;
  @Input() bitType: string = "info";
  @Input() bitShowIcon: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
