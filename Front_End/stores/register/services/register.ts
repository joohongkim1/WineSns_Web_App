
import axios from "axios";
export const registerService = {
  register,
  emailCheck,
  SNSRegister
}

// 회원 가입 함수
async function register(nickname : string, email : string, password: string): Promise<Response> {

    return axios.post('http://54.180.9.92:8090/WineProject/user/signup',null, {
      params :{ 
              email : email,
              nickName : nickname,
              password : password,  
      }
    }
  )
    .then(function (response: Response | any) {
      
      if (!response) {
        return Promise.reject(response.statusText);
      
     }
     
     console.log(response.data.success);
     
     return response.data.success;
    })
    .catch((e) => {

      console.log(e);
      return Promise.reject('Backend not reachable');
     
    })
    
}



async function SNSRegister(nickname : string, id : string, provider : string): Promise<Response> {

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
   
   console.log(response.data.success);
   
   return response.data.success;
  })
  .catch((e) => {

    console.log(e);
    return Promise.reject('Backend not reachable');
   
  })
  
}


// 이메일 중복 체크 함수
async function emailCheck(email : string): Promise<Response> {

  return axios.post('http://54.180.9.92:8090/WineProject/user/checkEmail',null, {
    params :{ 
            email : email
    }
  }
)
  .then(function (response: Response | any) {
    
    if (!response) {
      return Promise.reject(response.statusText);
    
   }
   console.log("heys");
   console.log(response.data.success);
   
   return response.data.success;
  })
  .catch((e) => {

    console.log(e);
    return Promise.reject('Backend not reachable');
   
  })
  
}


