import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILocal, ISite, ISousSite } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  language$ = new BehaviorSubject<string>('fr')
  selectedSite$ = new BehaviorSubject<any>(undefined)
  constructor() { }
}
