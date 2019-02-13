import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularDraggableModule} from 'angular2-draggable';

import {AppComponent} from './app.component';
import {RectangleComponent} from './components/rectangle/rectangle.component';

@NgModule({
    declarations: [
        AppComponent,
        RectangleComponent
    ],
    imports: [
        BrowserModule,
        AngularDraggableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
