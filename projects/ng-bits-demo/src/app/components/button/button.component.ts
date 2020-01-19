import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from '../../highlight.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit,  AfterViewChecked  {
  title = 'Angular Button Component | ng-bits for Angular';
  highlighted: boolean = false;
  api = [{
    name: "bitType (string)",
    description: "Defaults to default, possible values are: default, stroked, link."
  },
  {
    name: "disabled (boolean)",
    description: "Defaults to false, whether to disable the button."
  }]
  constructor(
    private highlightService: HighlightService,
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Angular Button Component' }
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
