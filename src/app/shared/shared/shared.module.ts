import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from 'src/app/modules/components/home/table-view/table-view.component';
import { DataPassService } from './data-pass.service';
import { ChartViewComponent } from 'src/app/modules/components/home/chart-view/chart-view.component';



@NgModule({
  declarations: [TableViewComponent,ChartViewComponent],
  imports: [
    CommonModule,
  ],
  exports:[TableViewComponent,ChartViewComponent]
})
export class SharedModule { }
