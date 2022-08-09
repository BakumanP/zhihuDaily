import axios,{ AxiosResponse } from "axios";

export function getLatestDaily(){
  return axios.get<LatestDto>('/api/4/news/latest')
}