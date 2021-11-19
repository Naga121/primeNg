import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { ImageModule } from 'primeng/image';
import {SplitButtonModule} from 'primeng/splitbutton';

@NgModule({
  
  exports: [
    ButtonModule,
    ImageModule,
    SplitButtonModule
  ],
  imports:[
    ButtonModule,
    ImageModule,
    SplitButtonModule
  ]
})

export class primengModule { }
