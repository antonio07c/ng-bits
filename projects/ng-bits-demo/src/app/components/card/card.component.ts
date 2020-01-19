import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { HighlightService } from '../../highlight.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit,  AfterViewChecked  {
  title = 'Angular Card Component | ng-bits for Angular';
  highlighted: boolean = false;
  api = [{
    name: "<bit-card>",
    description: "Card container with title, subtitle, content and footer."
  },
  {
    name: "<bit-card-content>",
    description: "Use it to show the main content of the card, scrollable when the card height is fixed."
  },
  {
    name: "<bit-card-title>",
    description: "Title to display."
  },
  {
    name: "<bit-card-subtitle>",
    description: "Text to display below the title."
  },
  {
    name: "<bit-card-footer>",
    description: "Fixed to the bottom of the card, usually used to display action buttons."
  }]
  constructor(
    private highlightService: HighlightService,
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Angular Card Component' }
    );    
  }

  ngAfterViewChecked() {
    try{
      if (!this.highlighted) {
        this.highlightService.highlightAll();
        this.highlighted = true;
      }
      }catch(ex){}    
  }

}
