import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoAreWeRoutingModule } from './who-are-we-routing.module';
import { WhoAreWeComponent } from './who-are-we.component';

@NgModule({
  imports: [
    CommonModule,
    WhoAreWeRoutingModule
  ],
  declarations: [WhoAreWeComponent]
})
export class WhoAreWeModule { }
