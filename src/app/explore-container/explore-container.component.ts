import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swiper from 'swiper';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ExploreContainerComponent {
  previewing = false
  selectedItem$ = new BehaviorSubject<any>(undefined)
  selectedIndex=0
  @Input() data!: any[];
  dismiss(){
    this.previewing =false;
    this.selectedIndex=0
    this.selectedItem$.next(undefined)
  }
  preview(item:any,index:number){
    this.selectedItem$.next(item)
    this.selectedIndex = index
    this.previewing=  true
  }
  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange([swiper]:Swiper[]) {
    this.selectedItem$.next(this.data[swiper.realIndex])
  }

}
