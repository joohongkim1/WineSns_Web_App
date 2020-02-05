import { config } from '../config/config'
import axios from "axios";
export const loginService = {
  login
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


  // // return fetch(`${config.backend_url}/users/sign_in.json`, requestOptions)
  // return fetch('http://70.12.246.40:8090/WineProject/user/signin?email=ssafy%40ssafy.com&password=1234')
  //   .then(function (response: Response | any)  {
  //     if (!response.ok) {
  //        return Promise.reject(response.statusText);
  //     }
  //     console.log("hey");
  //     console.log(response.json()); // 이메일에서 --> 닉네임으로 바꾸기
  //     return (response.headers.get('Authorization') || '').split(' ')[1];
  //   })
  //   .catch((e) => {
  //     console.log("catch");
  //     console.log(e);
  //     return Promise.reject('Backend not reachable');
     
  //   })
}


