import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MapService {
    public locations = [];

    constructor() {
    }
}
