
import axios from "axios";
import { Wine } from "../reducers/wine_reducer";
export const wineService = {
  getWineListByType,
  getWineListByName
}

async function getWineListByType(type: string): Promise<Response> {

  return axios.get('http://54.180.9.92:8090/WineProject/wine/fineAll/' + type, {
    // params: {
    //   type : type
    // },
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