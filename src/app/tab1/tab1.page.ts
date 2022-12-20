import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { PatrimoineService } from '../services/patrimoine.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  sites$  = new BehaviorSubject<any[]>([])
  constructor(private patrimoine: PatrimoineService) {}
  async ngOnInit(){
    const tmp = await lastValueFrom(this.patrimoine.getSitesByLang(false))
    this.sites$.next(tmp)
  }
  async onIonInfinite(event:any){
    const tmp = await lastValueFrom(this.patrimoine.getSitesByLang(true))
    const old = this.sites$.getValue()
    this.sites$.next([...old,...tmp]);
    (event as InfiniteScrollCustomEvent).target.complete();
  }
}
