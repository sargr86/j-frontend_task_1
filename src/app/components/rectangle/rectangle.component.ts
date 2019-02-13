import {Component, Input, OnInit} from '@angular/core';
import {SubjectService} from '../../services/subject.service';

@Component({
    selector: 'app-rectangle',
    templateUrl: './rectangle.component.html',
    styleUrls: ['./rectangle.component.scss']
})
export class RectangleComponent implements OnInit {

    @Input() dragging;

    constructor(
        private subject: SubjectService
    ) {
    }

    ngOnInit() {
        this.subject.getState().subscribe(dragging => {
            this.dragging = dragging;
        });

    }

}
