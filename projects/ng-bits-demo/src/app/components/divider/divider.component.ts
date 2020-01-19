import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../highlight.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {
  title = 'Angular Divider Component | ng-bits for Angular';
  highlighted: boolean = false;
  api = [{
    name: "bitOrientation (string)",
    description: "Possible values are: left, center, right. Default is left."
  }]
  constructor(
    private highlightService: HighlightService,
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Angular Divider Component' }
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
