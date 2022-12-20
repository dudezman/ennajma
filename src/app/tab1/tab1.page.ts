import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import Swiper from 'swiper';
import { PatrimoineService } from '../services/patrimoine.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  sites$  = new BehaviorSubject<any[]>([])
  done = false
  previewing = false
  selectedItem$ = new BehaviorSubject<any>(undefined)
  selectedIndex=0
  constructor(private patrimoine: PatrimoineService,private router: Router,private store: StoreService) {}
  async ngOnInit(){
    const tmp = await lastValueFrom(this.patrimoine.getSitesByLang(false))
    this.sites$.next(tmp)
  }
  onIonInfinite(event:any){
    setTimeout(async() => {
      const tmp = await lastValueFrom(this.patrimoine.getSitesByLang(true))
      if(tmp.length===0){
        this.done = true;
      }
    const old = this.sites$.getValue()
    this.sites$.next([...old,...tmp]);

      (event as InfiniteScrollCustomEvent).target.complete();
    }, 200);
  }
  dismiss(){
    this.previewing =false;
    this.selectedIndex=0
    this.selectedItem$.next(undefined)
  }
  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange([swiper]:Swiper[]) {
    this.selectedItem$.next(this.sites$.getValue()[swiper.realIndex])
  }
  preview(item:any,index:number){
    // this.selectedItem$.next(item)
    // this.selectedIndex = index
    // this.previewing=  true
    this.store.selectedSite$.next(item);
    this.router.navigate(['tabs/tab2'])
  }
}
