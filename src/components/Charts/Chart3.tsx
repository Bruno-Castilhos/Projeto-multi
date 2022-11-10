import { ApexOptions } from 'apexcharts';
import { Component } from 'react';
import Chart from 'react-apexcharts'
import {get} from '../../api/get'

export class App extends Component<{}, { series?: ApexOptions["series"], options?: ApexOptions }> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'chart-3',
          foreColor: '#fff'
        },
        xaxis: {
          categories: ['MÉDIA TURMA', 'MÉDIA ALUNO']
        },
        yaxis: {
          title: {
            text: 'Notas'
          }
        },
        dataLabels: {
          enabled: false
        }
      },
      series: [{
        data: [8,5]
      }]
    }
  }
  render() {
    return (
      <Chart className='text-[#000]' options={this.state.options} series={this.state.series} type="bar" width={380} height={260} />
    )
  }
}