import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { SwiperModule } from 'swiper/angular';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,SwiperModule,ZXingScannerModule],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
