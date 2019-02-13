import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RectangleComponent } from './components/rectangle/rectangle.component';
import {SubjectService} from './services/subject.service';

@NgModule({
  declarations: [
    AppComponent,
    RectangleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
