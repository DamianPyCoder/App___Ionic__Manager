import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { ListPaymentsComponent } from './components/list-payments/list-payments.component';
import { TranslateModule } from '@ngx-translate/core';
import { ListDataComponent } from 'src/app/shared/list-data/list-data.component';
import { FilterComponent } from 'src/app/shared/filter/filter.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    TranslateModule.forChild(),
    ListDataComponent,
    FilterComponent
  ],
  declarations: [
    Tab3Page,
    ListPaymentsComponent
  ]
})
export class Tab3PageModule {}
