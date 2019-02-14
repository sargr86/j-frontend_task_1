import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RectangleComponent} from './components/rectangle/rectangle.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {GetCoordinatesPipe} from './pipes/get-coordinates.pipe';

@NgModule({
    declarations: [
        AppComponent,
        RectangleComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DragDropModule
    ],
    providers: [GetCoordinatesPipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
