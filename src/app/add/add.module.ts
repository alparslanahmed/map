import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddComponent} from './add.component';
import {AddRoutingModule} from './add-routing.module';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [AddComponent],
    imports: [
        CommonModule,
        AddRoutingModule,
        IonicModule,
        FormsModule
    ]
})
export class AddModule {
}
