
import axios from "axios";
// import { Wine } from "../reducers/feed_reducer";
export const wineService = {
  getFeedListByWID
}

async function getFeedListByWID(wid: number, type : string): Promise<Response> {

  return axios.get('http://54.180.9.92:8090/WineProject/feed/findByWine/' + wid, {
    
    params: {
      type : type,
      wid : wid
    },
    headers: {
      'Access-Control-Allow-Origin': "*",
    }
  }
  )
    .then(function (response: Response | any) {

      if (!response) {
        return Promise.reject(response.statusText);

      }

      console.log("GET Feed List");

      return response.data as any;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}


async function getWineListByName(name : string): Promise<Response> {
  return axios.get('http://54.180.9.92:8090/WineProject/wine/readByName', {
    params: {
      name : name
    },
    headers: {
      'Access-Control-Allow-Origin': "*",
    }
  }
  )
    .then(function (response: Response | any) {

      if (!response) {
        return Promise.reject(response.statusText);

      }

      console.log("GET Wine List");

      return response.data;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}