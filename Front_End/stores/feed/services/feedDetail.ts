
import axios from "axios";
import HTTPS from '../../api';
import {Comment} from "../reducers/feed_detail_reducer";
import {loginService} from "../../login/services/login"
// import { Wine } from "../reducers/feed_reducer";
export const feedService = {
    getFeedDetailByFID,
    getCommentByFID,
    postComment,
    followUser,
    UnfollowUser,
    createFeedLike,
    deleteFeedLike,
    deleteComment
}

async function getFeedDetailByFID(fid : number): Promise<Response> {
  await updateVisit(fid);
  return HTTPS.get('/feed/findById', {
    params: {
      fid : fid
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

      console.log("GET Feed Detail List");

      return response.data as any;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}

async function updateVisit(fid : number): Promise<Response> {
  return HTTPS.put('/feed/updateVisit', null, {
    params: {
      fid : fid
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

      return response.data as any;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}


async function getCommentByFID(fid : number): Promise<Response> {
    return HTTPS.get('/comment/findByFeed/' + fid, {
      headers: {
        'Access-Control-Allow-Origin': "*",
      }
    }
    )
      .then(function (response: Response | any) {
  
        if (!response) {
          return Promise.reject(response.statusText);
  
        }
  
        console.log("GET Comment List");
        console.log(response.data);
        return response.data as any;
      })
      .catch(() => {
        return Promise.reject('Backend not reachable');
  
      })
  
  }
  
  
  
async function postComment(content : string, fid : number) : Promise<Response> {
  return HTTPS.post('/comment/create',null, {
    params :{ 
            content : content,
            fid : fid
    }, headers : {
        TOKEN : localStorage.getItem('token')
    }
  }
)
    .then(function (response: Response | any) {

      if (!response) {
        return Promise.reject(response.statusText);

      }


      return response.data as any;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}

 
async function followUser(uid : number) : Promise<Response> {
  return HTTPS.post('/follow/create',null, {
    params :{ 
          toUid : uid
    }, headers : {
        TOKEN : localStorage.getItem('token')
    }
  }
)
    .then(function (response: Response | any) {

      if (!response) {
        return Promise.reject(response.statusText);

      }


      return response.data as any;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}



async function UnfollowUser(uid : number) : Promise<Response> {
  return HTTPS.delete('/follow/delete', {
    params :{ 
          toUid : uid
    }, headers : {
        TOKEN : localStorage.getItem('token')
    }
  }
)
    .then(function (response: Response | any) {

      if (!response) {
        return Promise.reject(response.statusText);

      }


      return response.data as any;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}




async function createFeedLike(fid : number): Promise<Response> {

  return HTTPS.post('/feedlike/create', null, {
  params: {
    fid : fid
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

      loginService.likeFeedByUser();

      return response.data as any;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}



async function deleteFeedLike(fid : number): Promise<Response> {

  return HTTPS.delete('/feedlike/delete', {
    params: {
      fid : fid
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

        loginService.likeFeedByUser();

      return response.data as any;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}





async function deleteComment(cid : number): Promise<Response> {

  return HTTPS.delete('/comment/delete', {
    params: {
      cid : cid
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

      return response.data as any;
    })
    .catch(() => {
      return Promise.reject('Backend not reachable');

    })

}
