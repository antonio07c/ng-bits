import { NgModule } from '@angular/core';
import { NgBitsComponent } from './ng-bits.component';
import { CardComponent, CardTitle, CardSubtitle, CardContent, CardFooter  } from './components/card/card.component';
import { TagComponent } from './components/tag/tag.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { NoteComponent } from './components/note/note.component';
import { DividerComponent } from './components/divider/divider.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ConfirmDirective } from './components/confirmation-dialog/confirm.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { CountComponent } from './components/count/count.component';
import { IconContentComponent } from './components/icon-content/icon-content.component';

@NgModule({
  entryComponents: [ConfirmationDialogComponent],
  declarations: [NgBitsComponent, CardComponent, CardTitle, CardSubtitle, CardContent, CardFooter, TagComponent, ButtonComponent, NoteComponent, DividerComponent, ConfirmationDialogComponent, ConfirmDirective, CountComponent, IconContentComponent],
  imports: [CommonModule, OverlayModule],
  exports: [NgBitsComponent, CardComponent, CardTitle, CardSubtitle, CardContent, CardFooter, TagComponent, ButtonComponent, NoteComponent, DividerComponent, ConfirmationDialogComponent, ConfirmDirective, CountComponent, IconContentComponent]
})
export class NgBitsModule { }
