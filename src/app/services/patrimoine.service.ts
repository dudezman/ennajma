import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class PatrimoineService {
  sitesPage = 1;
  constructor(
    private http: HttpClient,
    private store: StoreService
  ) { }
  getSettings(){
    return this.http.get(environment.apiUrl+'/AppSetting')
  }
  getSitesByLang(next=true){ 
    if(next){
      this.sitesPage+=1
    }else{
      this.sitesPage===0
    }
    return this.http.get<any[]>(environment.apiUrl+'/Sitebylang?lang='+this.store.language$.getValue()+'&page=1&pager=4')
  }
}
