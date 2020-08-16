import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map.component';
import {MapRoutingModule} from './map-routing.module';
import {IonicModule} from '@ionic/angular';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    declarations: [MapComponent],
    imports: [
        CommonModule,
        MapRoutingModule,
        IonicModule,
        AgmCoreModule
    ]
})
export class MapModule {
}
