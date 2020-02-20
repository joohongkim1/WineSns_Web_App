import axios from 'axios';

export default axios.create({
    baseURL: 'https://i02a303.p.ssafy.io/WineProject',
    // header: {
    // 	Authorization: 'bearer accessKey'
    // }
});