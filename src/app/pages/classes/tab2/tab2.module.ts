import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ListClassesComponent } from './components/list-classes/list-classes.component';
import { TranslateModule } from '@ngx-translate/core';
import { ListDataComponent } from 'src/app/shared/list-data/list-data.component';
import { FormClassesComponent } from './components/form-classes/form-classes.component';
import { FilterComponent } from 'src/app/shared/filter/filter.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    TranslateModule.forChild(),
    ListDataComponent,
    FilterComponent
  ],
  declarations: [
    Tab2Page,
    ListClassesComponent,
    FormClassesComponent
  ]
})
export class Tab2PageModule {}
