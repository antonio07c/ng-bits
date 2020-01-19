import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { CONTAINER_DATA } from './confirmation-dialog-model';

@Component({
  selector: 'bit-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  public title:string = "Continue?";
  public text:string = "Are you sure you want to continue?";
  public confirmText:string = "OK";
  public cancelText:string = "Cancel";
  @Output() onConfirm: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(CONTAINER_DATA) public componentData: any){}
  
  ngOnInit(){
    if(this.componentData.title != undefined){ this.title = this.componentData.title};
    if(this.componentData.text != undefined){ this.text = this.componentData.text};
    if(this.componentData.confirmText != undefined){ this.confirmText = this.componentData.confirmText};
    if(this.componentData.cancelText != undefined){ this.cancelText = this.componentData.cancelText};
  }

  onOkClick(){
    this.onConfirm.next();
  }
  onCancelClick(): void {
    this.onCancel.next();
  }

}