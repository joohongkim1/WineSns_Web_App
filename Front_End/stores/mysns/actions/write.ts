import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';
import { Record, Map, List } from 'immutable';
// import writePost from '../lib/api/post'

const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE,
] = createRequestActionTypes('write/WRITE_POST'); // 포스트 작성

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }:params) => ({key, value}));

export const writePost = createAction(WRITE_POST, ({content, rating, title, wid}: ContentsStateParams) => ({content, rating, title, wid}));


const ContentsStateRecord = Record({
  content: '',
  rating: 0,
  title: '',
  wid: 0,
  post: null,
  postError: null,
});

interface params {
  key:number,
  value:any
}

interface ContentsStateParams {
  content: any,
  rating?: number,
  title: any,
  wid?: number,
  post?: any,
  postError?: any,
}

export class ContentsState extends ContentsStateRecord {
  content?: string;
  rating?: number;
  title?: string;
  wid?: number;
  post?: any;
  postError?: any;
}



// saga 생성
// const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
// export const writePost = createAction(WRITE_POST, ({content, rating, title, wid}: contents) => ({content, rating, title, wid}));

// saga 생성
// const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
// 여기서부터 saga
const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
export function* writeSaga() {
  console.log('실행좀...')
  yield takeLatest(WRITE_POST, writePostSaga);
}

// const initialContent = 

const initialState = {
  content: '',
  rating: 0,
  title: '',
  wid: 0,
  post: null,
  postError: null,
};

const write = handleActions<ContentsStateParams, any>(
  { 
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value }}) => {
      if (key === 'content'){
        state.content = value
        return state;
      }
      else if(key === 'rating') {
        state.rating = value;
        return state;
      }
      else if(key === 'title') {
        state.title = value;
        return state;
      }
      else {
        state.wid = value;
        return state;
      }
    },
    [WRITE_POST]: (state)=> ({
      ...state,
      // post와 postError를 초기화
      post: null,
      postError: null

    }),   
    // 포스트 작성 성공
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post
    }),
    // 포스트 작성 실패
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
);
export default write;

// export default function write(state:contents = initialState, action : any) {
//   switch (action.type) {
//     case INITIALIZE:
//       return {...state, 
//         state: initialState
//       }

//     case CHANGE_FIELD:
//       return {...state,
//         [action.payload.key]:action.payload.value
      
//       }

//     case WRITE_POST:
//       return {...state,
//         state:state,
//         post: null,
//         postError: null,
//       }

//     case WRITE_POST_SUCCESS:
//       return {...state,
//         post:action.payload.post,
//       }
//       case WRITE_POST_FAILURE:
//         return {...state,
//           postError:action.payload.postError,
//         }
//     default:
//       return state;
//   }
// }
