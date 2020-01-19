import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../highlight.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  enabled = true;
  message;
  title = 'Angular Confirmation Dialog Component | ng-bits for Angular';
  highlighted: boolean = false;
  api = [{
    name: "bitEnable (boolean)",
    description: "Defaults to true, whether to enable or disable the dialog."
  },
  {
    name: "bitTitle (string)",
    description: "Optional, sets the text in the header of the dialog."
  },
  {
    name: "bitText (string)",
    description: "Optional, text to display in the body of the dialog."
  },
  {
    name: "bitConfirmText (string)",
    description: "Optional, text of the confirmation button."
  },
  {
    name: "bitCancelText (string)",
    description: "Optional, text of the button that closes the dialog."
  },
  {
    name: "bitCloseOnBackDrop (boolean)",
    description: "Defaults to false, whether to close the dialog when clicking outside the dialog."
  },
  {
    name: "bitOnConfirm (EventEmitter)",
    description: "Executed when the confirm button is clicked."
  },
  {
    name: "bitOnCancel (EventEmitter)",
    description: "Executed when the dialog is canceled."
  }];

  constructor(
    private highlightService: HighlightService,
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Angular Confirmation Dialog Component' }
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

  showMsg(text: string){
    this.message = text;
    setTimeout(() => {
      this.message = undefined;
    }, 3500)
  }

}
