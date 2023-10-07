import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  PageSettingsModel,
  GridComponent,
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GridComponent2 {
  public pageSet: PageSettingsModel = { pageSize: 5 };
  @ViewChild('grid')
  public grid?: GridComponent;

  public data: any[] = [
    { OrderID: 1024569, CustomerName: 'Tchissola William', CustomerAge: 23 },
    { OrderID: 1024568, CustomerName: 'John Doe', CustomerAge: 44 },
    { OrderID: 1024569, CustomerName: 'Francis William', CustomerAge: 23 },
    { OrderID: 1024569, CustomerName: 'Rick William', CustomerAge: 23 },
    { OrderID: 1024569, CustomerName: 'Max William', CustomerAge: 23 },
    { OrderID: 1024569, CustomerName: 'Antoony William', CustomerAge: 23 },
    { OrderID: 1024569, CustomerName: 'Xeila William', CustomerAge: 23 },
    { OrderID: 1024569, CustomerName: 'Jane William', CustomerAge: 23 },
  ];

  public customizeRows(args: any) {
    console.log(args);

    for (let i in this.data) {
      if (Number(i) % 2 == 0) {
        ((this.grid as any).getRowByIndex(i) as any).style.background =
          '#f2f2f2';
      }
    }
  }
}
