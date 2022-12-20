import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class PatrimoineService {
  sitesPage = 1;
  sousSitesPage = 1;
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
      this.sitesPage=1
    }
    return this.http.get<any[]>(environment.apiUrl+'/Sitebylang?lang='+this.store.language$.getValue()+'&page='+this.sitesPage+'&pager=4')
  }
  getDetailSite(next=true){
    if(next){
      this.sousSitesPage+=1
    }else{
      this.sousSitesPage=1
    }
    return this.http.get<any>(environment.apiUrl+'/Detailsitebylang?lang='+this.store.language$.getValue()+'&page='+this.sousSitesPage+'&pager=4&id_site='+this.store.selectedSite$.getValue().id)
  }
}
