
import axios from "axios";
export const wineMainService = {
    getWineTop10,
    getWineTop3
}


async function getWineTop3(type: string): Promise<Response> {

  return axios.get('http://54.180.9.92:8090/WineProject/wine/readRank/VISIT_3', {
  
    headers: {
      'Access-Control-Allow-Origin': "*",
    }
  }
  )
    .then(function (response: Response | any) {

      if (!response) {
        return Promise.reject(response.statusText);

      }

      console.log("GET TOP 3 Wine List");

      return response.data as any;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}


async function getWineTop10(type : string): Promise<Response> {
  
  return axios.get('http://54.180.9.92:8090/WineProject/wine/readRank/VISIT_5', {
  
    headers: {
      'Access-Control-Allow-Origin': "*",
    }
  }
  )
    .then(function (response: Response | any) {

      if (!response) {
        return Promise.reject(response.statusText);

      }

      console.log("GET TOP 10 Wine List");

      return response.data as any;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}
