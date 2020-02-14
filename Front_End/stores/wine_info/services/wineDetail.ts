
import axios from "axios";
import { Wine } from "../reducers/wine_reducer";
import {loginService} from "../../login/services/login"
export const wineDetailService = {
  getWineDetail,
  createWineLike,
  deleteWineLike
}

async function getWineDetail(wid : number): Promise<Response> {

  return axios.get('http://54.180.9.92:8090/WineProject/wine/findByWid/' + wid, {
    
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


async function createWineLike(wid : number): Promise<Response> {

  return axios.post('http://54.180.9.92:8090/WineProject/winelike/create', null, {
  params: {
    wid : wid
  },
  headers: {
    'TOKEN' : localStorage.getItem('token'),
  }
}
  )
    .then(function (response: Response | any) {

      if (!response) {
        return Promise.reject(response.statusText);
      }

      loginService.likeWineByUser();
        // console.log("in axios");
        // console.log(response.data);
      return response.data as any;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}



async function deleteWineLike(wid : number): Promise<Response> {

  return axios.delete('http://54.180.9.92:8090/WineProject/winelike/delete', {
    params: {
      wid : wid
    },
    headers: {
     
      'TOKEN' : localStorage.getItem('token'),
    }
  }
  )
    .then(function (response: Response | any) {

      if (!response) {
        return Promise.reject(response.statusText);
      }
        // console.log("in axios");
        // console.log(response.data);
        loginService.likeWineByUser();

      return response.data as any;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}

