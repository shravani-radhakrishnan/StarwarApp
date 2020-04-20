import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from 'src/app/modules/components/home/table-view/table-view.component';
import { DataPassService } from './data-pass.service';
import { ChartViewComponent } from 'src/app/modules/components/home/chart-view/chart-view.component';
import { ChartsModule } from 'ng2-charts';
import { SearchHighlightPipe } from '../pipes/search-highlight.pipe';
// import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TableViewComponent,ChartViewComponent,SearchHighlightPipe],
  imports: [
    CommonModule,
    ChartsModule,
    // FormsModule
  ],
  exports:[TableViewComponent,ChartViewComponent,SearchHighlightPipe],
  providers:[SearchHighlightPipe]
})
export class SharedModule { }
