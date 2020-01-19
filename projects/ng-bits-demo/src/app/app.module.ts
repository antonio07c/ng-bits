import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgBitsModule } from 'ng-bits'
import { HighlightService } from './highlight.service';
import { CardComponent } from './components/card/card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NoteComponent } from './components/note/note.component';
import { ApiTableComponent } from './components/api-table/api-table.component';
import { TagComponent } from './components/tag/tag.component';
import { DividerComponent } from './components/divider/divider.component';
import { ButtonComponent } from './components/button/button.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

const appRoutes: Routes = [
  { path: 'button', component: ButtonComponent},
  { path: 'card', component: CardComponent},
  { path: 'confirmation-dialog', component: ConfirmationDialogComponent},
  { path: 'note', component: NoteComponent},
  { path: 'tag', component: TagComponent},
  { path: 'divider', component: DividerComponent},
  { path: '',
    redirectTo: '/button',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PageNotFoundComponent,
    NoteComponent,
    ApiTableComponent,
    TagComponent,
    DividerComponent,
    ButtonComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes      
    ),
    BrowserModule, NgBitsModule
  ],
  providers: [HighlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
