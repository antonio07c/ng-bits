import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HighlightService } from '../../highlight.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit,  AfterViewChecked {  
  title = 'Angular Note Component | ng-bits for Angular';
  highlighted: boolean = false;
  api = [{
    name: "bitTitle (string)",
    description: "Text to display in the title."
  },
  {
    name: "bitType (string)",
    description: "Defaults to info, possible values are: info, error, warning, success."
  },
  {
    name: "bitShowIcon (boolean)",
    description: "Defaults to true, when set to true an icon is shown."
  }]

  constructor(
    private highlightService: HighlightService,
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Angular Note Component' }
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
