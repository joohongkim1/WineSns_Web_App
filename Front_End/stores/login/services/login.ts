
import axios from "axios";
export const loginService = {
  login,
  SNSLogin,
  likeWineByUser
}

async function login(email: string, password: string): Promise<Response> {


  return axios.get('http://54.180.9.92:8090/WineProject/user/signin', {
    params: {
      email: email,
      password: password
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
      // console.log("in axios");
      // console.log(response);
      localStorage.setItem('token', <any>response.data.list[0].toString());
      console.log(localStorage.getItem('token'));


      sessionStorage.setItem(
        "uid", response.data.list[1].toString()
      );
      
   
      sessionStorage.setItem(
        "userInfo", response.data.list[2].toString()
      );


      likeWineByUser();

      return response;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}



async function likeWineByUser(): Promise<Response> {

  return axios.get('http://54.180.9.92:8090/WineProject/winelike/findByUser', {
    params: {
      uid : sessionStorage.getItem('uid')
    },
    headers: {
      'TOKEN' : localStorage.getItem('token'),
    }
  }
  
  ).then(function (response: Response | any) {

      if (!response) {
        return Promise.reject(response.statusText);

      }
      console.log(response);
      console.log(response.data);
      sessionStorage.setItem(
        "userLike", JSON.stringify(response.data)
      );
      
      console.log("user Like");

      let userLike = JSON.parse(sessionStorage.getItem('userLike') || '{}');
      
      console.log(userLike);
      
      return response;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}



async function SNSLogin(id: string, nickname: string, provider: string): Promise<Response> {

  return axios.post('http://54.180.9.92:8090/WineProject/user/sns/signup', null, {
    params: {
      sns_id: id,
      nickName: nickname,
      snsType: provider
    }
  }
  )
    .then(function (response: Response | any) {

      if (!response) {
        return Promise.reject(response.statusText);

      }
      // console.log("in axios");
      // console.log(response);
      localStorage.setItem('token', <any>response.data.list[0].toString());


      sessionStorage.setItem(
        "uid", response.data.list[1].toString()
      );
      
   
      sessionStorage.setItem(
        "userInfo", response.data.list[2].toString()
      );


      likeWineByUser();

      return response;

    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}


