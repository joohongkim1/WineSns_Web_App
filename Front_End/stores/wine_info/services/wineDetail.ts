
import axios from "axios";
import { Wine } from "../reducers/wine_reducer";
export const wineDetailService = {
  getWineDetail
}

async function getWineDetail(wid : number): Promise<Response> {

  return axios.get('http://54.180.9.92:8090/WineProject/wine/readByWid/' + wid, {
    
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
        // console.log("in axios");
        // console.log(response.data);
      return response.data as any;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}

