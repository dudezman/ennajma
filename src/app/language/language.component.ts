import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PatrimoineService } from '../services/patrimoine.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
  logo!:string;
  path = environment.baseUrl
  constructor(
    private patrimoine: PatrimoineService,
    private store: StoreService,
    private router: Router
  ) { }

  ngOnInit() {
    this.patrimoine.getSettings().subscribe((res:any)=>{
      this.logo = res.setting.logo
    })
  }
  setLanguage(lang:string){
    this.store.language$.next(lang)
    this.router.navigate(['tabs'])
  }
}
