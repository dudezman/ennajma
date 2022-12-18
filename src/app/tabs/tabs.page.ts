import { Component, ViewChild, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;
  @ViewChild(IonModal) modal!: IonModal;
  isOpen = false
  constructor() {}
  ngOnInit(): void {
  }
  cancel() {
    this.isOpen=false;
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.isOpen=false;
    this.modal.dismiss(this.name, 'confirm');
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
