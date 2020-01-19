import { Component, OnInit, Directive } from '@angular/core';

@Component({
  selector: 'bit-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/**** Content ****/
@Directive({
  selector: 'bit-card-content',
  host: {'class': 'card-content'}
})
export class CardContent {}

/**** Title ****/
@Directive({
  selector: 'bit-card-title, [bit-card-title]',
  host: {
    'class': 'card-title'
  }
})
export class CardTitle {}

/**** Subtitle ****/
@Directive({
  selector: 'bit-card-subtitle, [bit-card-subtitle]',
  host: {
    'class': 'card-subtitle'
  }
})
export class CardSubtitle {}

/**** Footer ****/
@Directive({
  selector: 'bit-card-footer',
  host: {
    'class': 'card-footer'
  }
})
export class CardFooter {}