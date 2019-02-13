import {Component, HostListener} from '@angular/core';
import {Offset} from './models/Offset';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    // Rectangle current sizes and position
    height = 170;
    width = 300;
    oldY = 0;
    oldX = 200;

    grabber = false; // responsible for grabbing state when do resizing

    wrapperStyle: object;
    dragging = false;   // responsible for dragging state
    degree = 0;  // rotate degree
    offset: Offset;

    constructor() {
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
    }

    /**
     * Acts on mouse up event, prevents further dragging of wrapper div
     */
    mouseUp() {
        this.dragging = false;
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

    /**
     * Mouse down event marks grabbing as started
     * @param event (mouse down event)
     */
    @HostListener('document:mousedown', ['$event'])
    onMouseDown(event: MouseEvent) {
        this.grabber = true;
        this.oldY = event.clientY;
        this.oldX = event.clientX;

        event.preventDefault();
    }

    /**
     * Mouse moving event here handles the rectangle resize
     * @param event mouse move event
     */
    @HostListener('document:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {

        // Mouse moving possible only when dragging & grabbing is finished
        if (!this.grabber || this.dragging) {
            return;
        }


        // Resizing div by subtracting cursor positions with from its older values and updating the rectangle sizes
        this.resizer(event.clientX - this.oldX, event.clientY - this.oldY);

        // Saving current coordinates to next time refer to
        this.oldY = event.clientY;
        this.oldX = event.clientX;

    }

    /**
     * Mouse up event stops both grabbing and dragging
     * @param event (mouse up event)
     */
    @HostListener('document:mouseup', ['$event'])
    onMouseUp(event: MouseEvent) {
        this.grabber = false;
        this.dragging = false;
    }

    /**
     * Resizes the rectangle
     * @param  offsetX current X offset
     * @param  offsetY current Y offset
     */
    resizer(offsetX: number, offsetY: number) {
        this.height += offsetY;
        this.width += offsetX;
    }


}
