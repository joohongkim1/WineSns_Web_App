
import axios from "axios";
import HTTPS from '../../api';
export const loginService = {
  login,
  SNSLogin,
  likeWineByUser,
  likeFeedByUser
}

async function login(email: string, password: string): Promise<Response> {


  return HTTPS.get('/user/signin', {
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
      likeFeedByUser();
      
      return response;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}



async function likeWineByUser(): Promise<Response> {

  return HTTPS.get('/winelike/findByUser', {
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




async function likeFeedByUser(): Promise<Response> {

  return HTTPS.get('/feedlike/findByUser', {
    params: {
      uid : sessionStorage.getItem('uid')
    }
  }
  
  ).then(function (response: Response | any) {

      if (!response) {
        return Promise.reject(response.statusText);

      }
      console.log(response);
      console.log(response.data);
      sessionStorage.setItem(
        "userLikeFeed", JSON.stringify(response.data)
      );
      
      console.log("user Feed Like");

      let userLikeFeed = JSON.parse(sessionStorage.getItem('userLikeFeed') || '{}');
      
      console.log(userLikeFeed);
      
      return response;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}



async function SNSLogin(id: string, nickname: string, provider: string): Promise<Response> {

  return HTTPS.post('/user/sns/signup',null, {
    params : {
      nickName : "Hello",
      snsType : provider,
      sns_id : id
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
      likeFeedByUser();

      console.log("hey");

      return response;

    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}


