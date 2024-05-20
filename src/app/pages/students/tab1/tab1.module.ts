import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { TranslateModule } from '@ngx-translate/core';
import { ListDataComponent } from 'src/app/shared/list-data/list-data.component';
import { FormStudentComponent } from './components/form-student/form-student.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    TranslateModule.forChild(),
    ListDataComponent
  ],
  declarations: [
    Tab1Page,
    ListStudentsComponent,
    FormStudentComponent
  ]
})
export class Tab1PageModule {}
