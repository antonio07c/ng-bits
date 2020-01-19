import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-api-table',
  templateUrl: './api-table.component.html',
  styleUrls: ['./api-table.component.css']
})
export class ApiTableComponent implements OnInit {
  @Input() api: any;
  constructor() { }

  ngOnInit() {
  }

}
