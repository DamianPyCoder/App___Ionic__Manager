import { Component, ViewChild } from '@angular/core';
import { ListPaymentsComponent } from './components/list-payments/list-payments.component';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  // Obtenemos el componente de la lista de los pagos
  @ViewChild(ListPaymentsComponent) listPayments: ListPaymentsComponent;

  constructor() { }

  // Recarga al entrar
  ionViewWillEnter() {
    if (this.listPayments) {
      this.listPayments.filter = new Filter();
      this.listPayments.filter.paid = null;
      this.listPayments.getPayments();
    }
  }

}
