import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILocal, ISite, ISousSite } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  language$ = new BehaviorSubject<string>('fr')
  sites$ = new BehaviorSubject<ISite[]>(Array.from({length:Math.random()*20+5}).map((v,i)=>({id:`${i}`,name:`site ${i}`,image:`https://picsum.photos/seed/${Math.floor(Math.random()*900+100)}/200`})))
  sousSites$ = new BehaviorSubject<ISousSite[]>(Array.from({length:Math.random()*20+5}).map((v,i)=>({id:`${i}`,name:`sous site ${i}`,image:`https://picsum.photos/seed/${Math.floor(Math.random()*900+100)}/200`})))
  locaux$ = new BehaviorSubject<ILocal[]>(Array.from({length:Math.random()*20+5}).map((v,i)=>({id:`${i}`,name:`local ${i}`,image:`https://picsum.photos/seed/${Math.floor(Math.random()*900+100)}/200`})))
  constructor() { }
}
