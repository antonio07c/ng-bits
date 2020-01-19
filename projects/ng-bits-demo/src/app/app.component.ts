import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{ 
  // title = 'ng-bits-demo';  

  constructor(private metaTagService: Meta){   
  }

  ngOnInit(): void {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular UI Components, Library, Material, Simple Design' }      
    ]);
  }

  public log(text: string){
    console.log(text);
  }

 
}
