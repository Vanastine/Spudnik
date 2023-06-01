import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { openCloseTrigger } from 'environments/page-animation';

@Component({
  selector: 'app-modalitem',
  templateUrl: './modalitem.component.html',
  styleUrls: ['./modalitem.component.css'],
  animations: [openCloseTrigger]
})

export class ModalitemComponent {
  modalVisible: boolean = false

  get openCloseTrigger() {
    return this.modalVisible ? "open" : "closed";
  }

  toggleItemPage() {
    this.modalVisible = !this.modalVisible;
  }
}
