import axios from 'axios';

interface contents {
  content: string,
  rating: number,
  title: string,
  wid: number
}
export const writePost = ({content, rating, title, wid}: contents) => {


  return axios.post('http://54.180.9.92:8090/WineProject/feed/create', null, {
    headers: { 
      'TOKEN': 'application/x-www-form-urlencoded'
    },
    params: {
      content: content,
      rating: rating,
      title: title,
      wid: wid
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