import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class SubjectService {

    public state = new Subject<boolean>();

    constructor() {
    }


    setState(value) {
        this.state.next(value);
    }

    getState(): Observable<boolean> {
        return this.state.asObservable();
    }
}
