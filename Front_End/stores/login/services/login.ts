import { config } from '../config/config'
import axios from "axios";
export const loginService = {
  login,
  SNSLogin
}

async function login(email : string, password: string): Promise<Response> {
  const requestOptions = {
    methods : 'GET',
    headers: [ ['Access-Control-Allow-Origin', '*'], ['Content-Type', 'application/json'], ['Accept', 'application/json']],
    // body: JSON.stringify({
    //   user: { email: email, password: password, remember_me: true } ['Access-Control-Allow-Origin', '*'],
    // })

  };

return axios.get('http://54.180.9.92:8090/WineProject/user/signin', {
      params : {
        email : email,
        password : password
      },
      headers : {
        'Access-Control-Allow-Origin' : "*",
      }
    }
    )
    .then(function (response: Response | any) {
      
      if (!response) {
        return Promise.reject(response.statusText);
      
     }

     console.log("heeeey");

     return response.data.data;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');
     
    })

}



async function SNSLogin(id: string, nickname : string, provider : string): Promise<Response> {
  const requestOptions = {
    methods : 'GET',
    headers: [ ['Access-Control-Allow-Origin', '*'], ['Content-Type', 'application/json'], ['Accept', 'application/json']],
    // body: JSON.stringify({
    //   user: { email: email, password: password, remember_me: true } ['Access-Control-Allow-Origin', '*'],
    // })

  };


return axios.post('http://54.180.9.92:8090/WineProject/user/sns/signup',null, {
      params : {
        sns_id : id,
        nickName : nickname,
        snsType : provider
      }
    }
    )
    .then(function (response: Response | any) {
      
      if (!response) {
        return Promise.reject(response.statusText);
      
     }

     console.log("heeeey");

     return response.data.data;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');
     
    })

}


