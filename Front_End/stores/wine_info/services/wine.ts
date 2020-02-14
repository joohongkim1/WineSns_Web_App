
import axios from "axios";
import { Wine } from "../reducers/wine_reducer";
export const wineService = {
  getWineListByType,
  getWineListByNameList
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


async function getWineListByNameList(names : string[]): Promise<Response> {
  let query = "country=" + names[0];
  for(var i =1; i<names.length; i++){
     query += "&country=" + names[i];                                      
  }

  return axios.get('http://54.180.9.92:8090/WineProject/wine/search?' + query, {
    headers: {
      'Access-Control-Allow-Origin': "*",
    }
  }
  )
    .then(function (response: Response | any) {

      if (!response) {
        return Promise.reject(response.statusText);

      }
      console.log(query);
      console.log("GET Wine List");
      console.log(response.data);

      return response.data as any;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}