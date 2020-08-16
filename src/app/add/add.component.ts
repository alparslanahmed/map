import {AfterViewInit, Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {MapService} from '../map.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit, AfterViewInit {
    private geoCoder: google.maps.Geocoder;
    location: any = {title: '', description: ''};
    @ViewChild('address') address;

    constructor(private mapsAPILoader: MapsAPILoader,
                private ngZone: NgZone,
                public mapService: MapService,
                private router: Router) {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.mapsAPILoader.load().then(async () => {
            const inputElement = await this.address.getInputElement();
            this.geoCoder = new google.maps.Geocoder;
            let autocomplete = new google.maps.places.Autocomplete(inputElement);
            autocomplete.addListener('place_changed', () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();
                    this.location.address = place.formatted_address;
                    this.location.lat = place.geometry.location.lat();
                    this.location.lng = place.geometry.location.lng();
                });
            });
        });
    }

    submit() {
        this.mapService.locations.push(this.location);
        this.location = {title: '', description: ''};
        this.router.navigate(['map']);
    }
}
