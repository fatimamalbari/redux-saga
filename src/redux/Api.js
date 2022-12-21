import axios from 'axios';
import { baseUrl } from "./constants";

export async function fetchWeatherRecords(){
  return axios.get(`${baseUrl}`);
}

export async function fetchSearchWeatherRecords(search) {
  if (search){
    return await axios.get(`${baseUrl}/weather?q=${search}&appid=e77460dfaa55e9e9c1642c52add1954f`)
  }
}