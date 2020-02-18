import axios from 'axios';

interface contents {
  content: any,
  rating: any,
  title: any,
  wid: any
}


export const writePost = ({content, rating, title, wid}:contents) => {
  console.log('publish 받음')
  return axios.post('https://i02a303.p.ssafy.io/WineProject/feed/create', null, {
    params: {
      content: content,
      rating: rating,
      title: title,
      wid: wid
    },
    headers: { 
      'TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwicm9sZXMiOlsiRU1BSUxfVVNFUiJdLCJpYXQiOjE1ODE4OTg0NzgsImV4cCI6MTU4MTkwMjA3OH0.Mnb57qTFdSON1w14JOMKC2DMvWgvJJOO1hRWRvFBq4c',
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    },
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
