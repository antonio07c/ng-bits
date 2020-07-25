import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../highlight.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent implements OnInit {
  title = 'Angular UI Components | ng-bits for Angular';
  highlighted: boolean = false;
  import = "import { NgBitsModule } from 'ng-bits'";
  ngModule = "@NgModule({";
  imports = "imports: [ NgBitsModule ]";
  ngModuleEnd = "})";
  export = "export class AppModule { }"

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
