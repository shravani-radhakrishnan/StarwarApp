import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/components/home/home.component';
import { TableViewComponent } from './modules/components/home/table-view/table-view.component';
import { ChartViewComponent } from './modules/components/home/chart-view/chart-view.component';
import { HomeModule } from './modules/components/home/home.module';
import { SharedModule } from './shared/shared/shared.module';
import { DataPassService } from './shared/shared/data-pass.service';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    // ChartsModule
  ],
  providers: [DataPassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
