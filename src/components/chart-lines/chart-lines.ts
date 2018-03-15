import { Component, Input, OnChanges } from '@angular/core';

/* Import HighCharts */
import * as HighCharts from 'highcharts';

/**
 * Generated class for the ChartLinesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chart-lines',
  templateUrl: 'chart-lines.html'
})
export class ChartLinesComponent implements OnChanges {
  
  myChart: HighCharts;

  _data: any;
  @Input()
  data: any;
  
  _name: string;
  @Input()
  name: string;

  constructor() {
    console.log('Hello ChartLinesComponent Component');
  }

  /* Check if any @Input was value change */
  ngOnChanges(changes: any) {
    console.log(changes);
    if (changes && changes.data && changes.data.currentValue != undefined) {
      this._data = this.data;
    }
    if (changes && changes.name && changes.name.currentValue != undefined) {
      this._name = this.name;
    }
    if (this._data && this._name) {
      this.init();
    }
  }

  getWin() {
    let response = [];
    
    for (let values of this.data['wins']) {
      response.push( [values.date, values.value] );
    }

    return response;
  }

  getLoose() {
    let response = [];
    
    for (let values of this.data['loose']) {
      response.push( [values.date, values.value] );
    }

    return response;
  }

  init() {
      this.myChart = HighCharts.chart('container', {
        chart: {
            type: 'spline'
        },
        title: {
            text: this._name
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Value'
            },
            min: 0
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
        },
    
        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },
    
        series: [{
            name: 'Wins',
            data: this.getWin()                
        }, {
            name: 'Loose',
            data: this.getLoose()
        }]
    });
  }
}
