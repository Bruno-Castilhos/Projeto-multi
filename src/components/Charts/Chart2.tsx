import { ApexOptions } from 'apexcharts';
import { Component } from 'react';
import Chart from 'react-apexcharts'
import {get} from '../../api/get'

//const url = 'https://api-projeto-iris.herokuapp.com/report/science_1_year/skill-student';
const url = 'https://run.mocky.io/v3/5e8cbdc1-9cd2-47e3-b8fc-d63f95a3abd0';

interface backendResponse {
  skill_id: string;
  total_points_distributed: number;
  total_points_received: number;
}

const apiResponse = await get(url) as backendResponse[]

const Y = apiResponse.map(arr => arr.total_points_received)

const X = apiResponse.map(arr => arr.skill_id)

const Z = apiResponse.map(arr => arr.total_points_distributed)

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
            offsetY: 86
          }
        },
        yaxis: {
          title: {
            text: 'Notas',
            offsetX: -4
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#12566F", "#FFF"],
      },


      series: [{
        type: "column",
        name: "Notas obtidas",
        data: Y
      },
      {
        type: "column",
        name: "Notas distribuídas",
        data: Z
      }
]
    }
  }
  render() {
    return (
      <Chart className='text-[#000]' options={this.state.options} series={this.state.series} type="bar" width={700} height={400} />
    )
  }
}
