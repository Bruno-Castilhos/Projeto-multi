import { ApexOptions } from 'apexcharts';
import { Component, useState } from 'react';
import Chart from 'react-apexcharts'
import {get} from '../../api/get'

// const url = `https://api-projeto-iris.herokuapp.com/report/science_1_year/student/${Student}/skill/${Skill}`;

interface backendResponse {
  class_average_points: number;
  student_points: number;
}

const App =()=>{
  async function apiResponse(s:string, sk:string) {
    const url = `https://api-projeto-iris.herokuapp.com/report/science_1_year/student/${s}/skill/${sk}`;
    const response = await get(url) as backendResponse
    setSeries([{data: [response.class_average_points, response.student_points]}])
  }

      const [options, setOptions] = useState({
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
      })
      const [series, setSeries] = useState([{
        data: [0,0]
      }])

      
  const [Student, setStudent] = useState("");
  const stu = [
    {
      name: "Selecione o aluno",
      value: ""},
    {
      name: "Aluno 1",
      value: "student_1"},
      {
      name: "Aluno 2",
      value: "student_2"},
      {
        name: "Aluno 3",
        value: "student_3"},
      {
        name: "Aluno 4",
        value: "student_4"},
  ];

  const [Skill, setSkill] = useState("");
  const ski = [
    "Selecione a habilidade", "EF01CI01", "EF01CI02", "EF01CI03", "EF01CI04", "EF01CI05", "EF01CI06"
  ]
    return (
      <div>
        <section className="flex justify-between items-center px-36 py-4 text-[#000]">
          <select onChange={e => setStudent(e.target.value as any)}>
          {stu.map((value, key) => (
            <option key={key} value={value.value}>{value.name}</option>))}
          </select>
          <select onChange={e => setSkill(e.target.value as any)}>
          {ski.map((value, key) => (
            <option key={key} value={value}>{value}</option>))}
          </select>
          <button className='text-[#fff]' onClick={() => apiResponse(Student,Skill)}>
            Aplicar
          </button>
        </section>
        <Chart className='text-[#000]' options={options} series={series} type="bar" width={700} height={400} />
      </div>
    )
}

export default App




// import { ApexOptions } from 'apexcharts';
// import { Component, useState } from 'react';
// import Chart from 'react-apexcharts'
// import {get} from '../../api/get'


// export class App extends Component<{}, { series?: ApexOptions["series"], options?: ApexOptions }> {
//   constructor(props: {} | Readonly<{}>) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: 'chart-3',
//           foreColor: '#fff'
//         },
//         xaxis: {
//           categories: ['MÉDIA TURMA', 'MÉDIA ALUNO']
//         },
//         yaxis: {
//           title: {
//             text: 'Notas'
//           }
//         },
//         dataLabels: {
//           enabled: false
//         }
//       },
//       series: [{
//         data: [8,5]
//       }]
//     }
//   }
//   render() {
//     return (
//         <Chart className='text-[#000]' options={this.state.options} series={this.state.series} type="bar" width={700} height={400} />
//     )
//   }
// }




/* <div className="flex justify-between items-center px-52 py-6 text-[#000]">
          <select name="student" id="student_name" className='w-fit'>
            <option value="student_1">Aluno 1</option>
            <option value="student_2">Aluno 2</option>
            <option value="student_3">Aluno 3</option>
            <option value="student_4">Aluno 4</option>
          </select>
          <select name="grade" id="grade" className='w-fit'>
            <option value="science_1_year">Ciencias 1º ano</option>
          </select>
  </div> */