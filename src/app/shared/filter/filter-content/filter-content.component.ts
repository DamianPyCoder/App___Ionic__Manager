import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, PopoverController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { Filter } from 'src/app/models/filter';
import { Student } from 'src/app/models/student';
import { SqliteManagerService } from 'src/app/services/sqlite-manager.service';

@Component({
  selector: 'app-filter-content',
  templateUrl: './filter-content.component.html',
  styleUrls: ['./filter-content.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule]
})
export class FilterContentComponent implements OnInit {

  // Inputs
  @Input() filter: Filter;
  @Input() payment: boolean;

  // Atributos
  public students: Student[];

  constructor(
    private sqliteService: SqliteManagerService,
    private popoverController: PopoverController
  ) {
    this.students = [];
  }

  ngOnInit() {
    // Obtenemos los estudiantes
    this.sqliteService.getStudents().then((students: Student[]) => {
      this.students = students;
    })
  }

  filterData(){
    // Cerramos el popover devolviendo el filtro
    this.popoverController.dismiss(this.filter);
  }

  reset(){
    // Cerramos el popover devolviendo el filtro reseteado
    this.filter = new Filter();
    this.popoverController.dismiss(this.filter);
  }

}
