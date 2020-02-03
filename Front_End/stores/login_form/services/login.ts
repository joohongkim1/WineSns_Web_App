import { config } from '../config/config'

export const loginService = {
  login
}



async function login(email : string, password: string): Promise<Response> {
  const requestOptions = {
    methods : 'GET',
    headers: [['Access-Control-Allow-Origin', '*'],['Content-Type', 'application/json'], ['Accept', 'application/json']],
    // body: JSON.stringify({
    //   user: { email: email, password: password, remember_me: true }
    // })

  };


  // return fetch(`${config.backend_url}/users/sign_in.json`, requestOptions)
  return fetch('http://70.12.246.40:9090/WineProject/user/signin?email=' + email + '&password=' + password, requestOptions)
    .catch(() => {
      return Promise.reject('Backend not reachable');
     
    })
    .then(function (response: Response | any)  {

      if (!response.ok) {
         return Promise.reject(response.statusText);
       
      }

      console.log("hey");
      console.log(response.json()); // 이메일에서 --> 닉네임으로 바꾸기
      return (response.headers.get('Authorization') || '').split(' ')[1];
    })
}