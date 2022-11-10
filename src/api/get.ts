import axios from 'axios'


export async function get(url:string) : Promise<unknown[]>{
  const a = await axios({
    method: 'GET',
    url: url,
  })
  return a.data
}
