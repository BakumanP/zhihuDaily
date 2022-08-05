import axios from "axios";

export function getLatestDaily(){
  return axios.get('/api/4/news/latest')
}