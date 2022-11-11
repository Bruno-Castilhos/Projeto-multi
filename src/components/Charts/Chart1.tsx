import { ApexOptions } from 'apexcharts';
import { Component } from 'react';
import Chart from 'react-apexcharts'
import {get} from '../../api/get'

const url = 'https://api-projeto-iris.herokuapp.com/report/science_1_year/skill-student';

interface backendResponse {
  skill_id: string;
  skill_percentage: number;
}

const apiResponse = await get(url) as backendResponse[]

const value = apiResponse.map(arr => arr.skill_percentage)

const label = apiResponse.map(arr => arr.skill_id)





export class App extends Component<{}, { series?: ApexOptions["series"], options?: ApexOptions }> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: value,
      options: {
        labels: label,
        responsive: [{
          options: {
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
      <Chart options={this.state.options} series={this.state.series} width={500} type={'pie'}/>
    )
  }
}