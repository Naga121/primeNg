import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { ImageModule } from 'primeng/image';
import {SplitButtonModule} from 'primeng/splitbutton';
import { PanelModule } from "primeng/panel";
import { RippleModule } from "primeng/ripple";

@NgModule({
  
  exports: [
    ButtonModule,
    ImageModule,
    SplitButtonModule,
    PanelModule,
    RippleModule
  ],
  imports:[
    ButtonModule,
    ImageModule,
    SplitButtonModule,
    PanelModule,
    RippleModule
    
  ]
})

export class primengModule { }
