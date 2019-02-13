import {Component} from '@angular/core';
import {Offset} from './models/Offset';
import {SubjectService} from './services/subject.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    wrapperStyle: object;
    dragging = false;   // responsible for dragging state
    degree = 0;  // rotate degree
    offset: Offset;

    constructor(
        private subject: SubjectService
    ) {

    }

    /**
     * Acts on mouse down event, changes wrapper div transform style
     * @param e event that fires on mouse down event
     */
    dotMouseDown(e: MouseEvent) {
        this.offset = {
            x: e.pageX,
            y: e.pageY
        };

        this.dragging = true;
        this.subject.setState(this.dragging);
    }

    /**
     * Acts on mouse up event, prevents further dragging of wrapper div
     */
    mouseUp() {
        this.dragging = false;
        this.subject.setState(this.dragging);
    }


    /**
     * If dragging event is not stopped, acts on mouse move event
     * @param e event that fires on mouse move event
     */
    mouseMove(e: MouseEvent) {
        if (this.dragging) {
            const mouse_x = e.pageX - this.offset.x;
            const mouse_y = e.pageY - this.offset.y;

            const radians = Math.atan2(mouse_x, mouse_y);
            this.degree = (radians * (180 / Math.PI) * -1) + 90;
            this.wrapperStyle = {'transform': 'rotateZ(' + this.degree + 'deg)', 'transform-origin': '50% 50%'};
        }
    }

}
