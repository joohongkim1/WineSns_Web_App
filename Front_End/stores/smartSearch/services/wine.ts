
import axios from "axios";
import { Wine } from "../reducers/wine_reducer";
export const wineService = {
  getSmartSearch
}

async function getSmartSearch(alcohol : number, country : string, sparkling : boolean, sweet : number, type: string): Promise<Response> {

  return axios.get('http://54.180.9.92:8090/WineProject/wine/search', {
    params: {
      alcohol : alcohol,
      country : country,
      sparkling : sparkling,
      sweet : sweet,
      type : type
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

