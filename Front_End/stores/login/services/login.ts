
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

      sessionStorage.setItem(
        "userLikeFeed", JSON.stringify(response.data)
      );
      


      let userLikeFeed = JSON.parse(sessionStorage.getItem('userLikeFeed') || '{}');
      
    
      
      return response;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}




async function getUserFollowList(): Promise<Response> {

  return HTTPS.get('/follow/findByFollowing', {
    params: {
      fromUid : sessionStorage.getItem('uid')
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

      sessionStorage.setItem(
        "userFollow", JSON.stringify(response.data)
      );
      


      //let userFollow = JSON.parse(sessionStorage.getItem('userFollow') || '{}');
      
    
      
      return response;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}




async function SNSLogin(id: string, nickname: string, provider: string): Promise<Response> {
  console.log("whahwhwhwh");
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
      console.log("ok");
      if (!response) {
        return Promise.reject(response.statusText);

      }
        console.log("in axios");
      console.log(response);
      localStorage.setItem('token', <any>response.data.list[0].toString());
      console.log(localStorage.getItem('token'));


      console.log("hey1");
      sessionStorage.setItem(
        "uid", response.data.list[1].toString()
      );
      
      console.log("hey2");
      sessionStorage.setItem(
        "userInfo", response.data.list[2].toString()
      );

      console.log("why");



      console.log("hey");

      return response;

    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}


