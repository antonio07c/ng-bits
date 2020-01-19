import { Directive, HostListener, ViewContainerRef, EventEmitter, Output, Input, Injector } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { CONTAINER_DATA } from './confirmation-dialog-model';

@Directive({
  selector: '[bitConfirm]'
})
export class ConfirmDirective {
  @Input() bitEnable: boolean=true;
  @Input() bitTitle: string;
  @Input() bitText: string;
  @Input() bitConfirmText: string;
  @Input() bitCancelText: string;
  @Input() bitCloseOnBackDrop: boolean=false;
  @Output() bitOnConfirm = new EventEmitter<void>();
  @Output() bitOnCancel = new EventEmitter<void>();

  constructor(public overlay: Overlay, public viewContainerRef: ViewContainerRef, private injector: Injector) { }

   @HostListener('click') onButtonClick(): void {
     if(this.bitEnable){      
      this.openDialog();
     }
     else{
       this.bitOnConfirm.emit();
     }
  }

  openDialog(){   
    let config = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-dark-backdrop',
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    });

    let overlayRef = this.overlay.create(config);    
    let componentRef = overlayRef.attach(new ComponentPortal(ConfirmationDialogComponent, this.viewContainerRef, this.createPortalInjector({
          title: this.bitTitle,
          text: this.bitText,
          confirmText: this.bitConfirmText,
          cancelText: this.bitCancelText
        })));    

    componentRef.instance.onConfirm.subscribe(() => {
      this.bitOnConfirm.emit();
      overlayRef.detach()
    });

    componentRef.instance.onCancel.subscribe(() => {      
      this.bitOnCancel.emit();
      overlayRef.detach()
    });
    
    overlayRef.backdropClick().subscribe(() => {      
      if(this.bitCloseOnBackDrop){
        this.bitOnCancel.emit();
        overlayRef.detach()
      }
    });
  } 

  createPortalInjector(dataToPass): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(CONTAINER_DATA, dataToPass);
    return new PortalInjector(this.injector, injectorTokens);
  }

}