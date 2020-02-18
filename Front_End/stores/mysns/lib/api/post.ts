import axios from 'axios';
import HTTPS from '../../../api';

interface contents {
  content: any,
  rating: any,
  title: any,
  wid: any
}


async function writePost({content, rating, title, wid}:contents) : Promise<Response>{
  console.log('publish 받음')
  let data = JSON.stringify({
    content: content,
      rating: rating,
      title: title,
      wid: wid
  })
  return HTTPS.post('/feed/create',data, {
    
    headers : { 
      TOKEN : localStorage.getItem('token'),
      'Content-Type': 'application/json',
    }
    }
  )
    .then(function (response: Response | any) {
      console.log('then')
      if (!response) {
        return Promise.reject(response.statusText);

      }
      return response.data as any;
    })
    .catch((e) => {
      console.log('catch8789')
      console.log(e);
      return Promise.reject('Backend not reachable');

    })

}

export default writePost;
