import { ApexOptions } from 'apexcharts';
import { Component } from 'react';
import Chart from 'react-apexcharts'
import {get} from '../../api/get'

const url = 'https://api-projeto-iris.herokuapp.com/report/science_1_year/skill-student';

interface backendResponse {
  skill_id: string;
  total_points: number;
}

const apiResponse = await get(url) as backendResponse[]

const Y = apiResponse.map(arr => arr.total_points)

const X = apiResponse.map(arr => arr.skill_id)


export class App extends Component<{}, { series?: ApexOptions["series"], options?: ApexOptions }> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'chart-2',
          foreColor: '#fff'
        },
        xaxis: {
          categories: X,
          title: {
            text: 'Habilidades',
            offsetY: 130
          }
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
        data: Y
      }]
    }
  }
  render() {
    return (
      <Chart className='text-[#000]' options={this.state.options} series={this.state.series} type="bar" width={380} height={260} />
    )
  }
}