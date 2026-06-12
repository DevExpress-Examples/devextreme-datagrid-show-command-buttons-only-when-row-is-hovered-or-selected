import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { Employee, Service } from './app.service';

@Component({
    selector: 'app-root',
    imports: [DxDataGridModule],
    providers: [Service],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  employees: Employee[];

  constructor(service: Service) {
    this.employees = service.getEmployees();
  }
}
