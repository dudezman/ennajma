import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { BehaviorSubject, lastValueFrom, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import Swiper from 'swiper';
import { ISite, ISousSite } from '../models/models';
import { PatrimoineService } from '../services/patrimoine.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  sousSites:ISousSite[] = []
  gallery:{link:string}[]=[]
  path = ''
  site$ = this.store.selectedSite$
  previewing = false
  selectedItem$ = new BehaviorSubject<any>(undefined)
  selectedIndex=0
  done = false
  isReadMore = false;
  showLess = ""
  readMore = ""
  constructor(private store:StoreService,private patrimoine: PatrimoineService) {}
  ngOnInit(): void {
    switch (this.store.language$.getValue()) {
      case 'fr':
        this.showLess = "Montrer moins"
        this.readMore = "Lire la suite"
        break;
      case 'en':
        this.showLess = "Show less"
        this.readMore = "Read more"
        break;
      case 'ar':
        this.showLess = "عرض أقل"
        this.readMore = "قراءة المزيد"
        break;
      default:
        break;
    }
    this.patrimoine.getDetailSite(false).pipe(tap(res=>{
      this.sousSites = res.soussite;
      this.gallery = res.site[0].gallery
      this.path = res.site[0].link
    })).subscribe()
  }
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
    // console.log(swiper);
  }
  onSlideChange([swiper]:Swiper[]) {
    this.selectedItem$.next(this.gallery[swiper.realIndex])
  }
  onIonInfinite(event:any){
    setTimeout(async() => {
      const tmp = await lastValueFrom(this.patrimoine.getDetailSite(true))
      if(tmp.soussite.length===0){
        this.done = true;
      }
    this.sousSites = [...this.sousSites,...tmp.soussite];

      (event as InfiniteScrollCustomEvent).target.complete();
    }, 200);
  }
  selectSousSite(ssite:ISousSite){
    
  }
}
