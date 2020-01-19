import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../highlight.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  title = 'Angular Tag Component | ng-bits for Angular';
  highlighted: boolean = false;
  api = [{
    name: "bitCloseable (boolean)",
    description: "When set to true the tag can be closed."
  },
  {
    name: "bitColor (string)",
    description: "Background color of the tag."
  },
  {
    name: "bitOnClose (EventEmitter)",
    description: "Executed when the tag is closed."
  }]

  constructor(
    private highlightService: HighlightService,
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Angular Tag Component' }
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
