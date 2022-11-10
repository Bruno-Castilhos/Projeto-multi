import { ApexOptions } from 'apexcharts';
import { Component } from 'react';
import Chart from 'react-apexcharts'
import {get} from '../../api/get'







export class App extends Component<{}, { series?: ApexOptions["series"], options?: ApexOptions }> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          width: 380,
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        legend: {
          labels: {
            colors: ['#fff']
          }
        }
      },
    }
  }
  render() {
    return (
      <Chart options={this.state.options} series={this.state.series} type={'pie'}/>
    )
  }
}