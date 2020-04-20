import { Component, OnInit } from "@angular/core";
// import { EChartOption } from 'echarts';
import { ChartOptions, ChartType } from "chart.js";
import {
  Label,
  SingleDataSet,
  monkeyPatchChartJsTooltip,
  monkeyPatchChartJsLegend,
} from "ng2-charts";
import { NO_CHARACTERS_IN_FILM } from "src/app/core/constants/app.constant";

@Component({
  selector: "app-chart-view",
  templateUrl: "./chart-view.component.html",
  styleUrls: ["./chart-view.component.scss"],
})
export class ChartViewComponent implements OnInit {
  chartInfo = NO_CHARACTERS_IN_FILM;
  charactersArray;
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = this.getData('Film');
  public pieChartData: SingleDataSet = this.getData('Characters');
  public pieChartType: ChartType = "pie";
  public pieChartLegend = false;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    console.log(this.pieChartData);

  }
  ngOnInit(): void {}
  getData(val) {
    let data = [];
    this.chartInfo.forEach((element) => {
      data.push(element[val]);
    });
    return data;
  }
}
