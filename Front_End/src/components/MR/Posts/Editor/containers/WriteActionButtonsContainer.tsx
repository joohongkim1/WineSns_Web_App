import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import WriteActionButtons from '../WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
// import writePosts from '../../../../../../stores/mysns/lib/api/post';
import * as postsAPI from '../../../../../../stores/mysns/lib/api/post';
import write, {writePost, writeSaga} from '../../../../../../stores/mysns/actions/write';
import { rootState } from '../../../../../../stores/login/store';


interface Props extends RouteComponentProps {}
interface write {
  content: string,
  rating: number,
  title: string,
  wid: number,
  post: any,
  postError: any,
}


const WriteActionButtonsContainer = ( {history}: Props ) => {
  console.log('aaaaaaa')
  const dispatch = useDispatch();
  const { content, rating, title, wid, post, postError } = useSelector(( state: rootState ) => (
    state.write
  ));
  console.log(content, rating, title, wid, post, postError)

  // 포스트 등록
  const onPublish = () => {
    console.log('publish')
    dispatch(
      writePost({
        content,
        rating,
        title,
        wid,
      }),
    );
    // dispatch(
    //   writeSaga()
    // )
  };

  // 취소
  const onCancel = () => {
    // history.goBack();
  };

  // 성공 혹은 실패시 할 작업
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);
  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;

  
};



export default withRouter(WriteActionButtonsContainer);

// interface IProps {
//   post: any,
//   postError: any,
//   dispatch: Function,
// };

// interface IState {
//   content: string,
//   rating: number,
//   title: string,
//   wid: number,
//   post: any,
//   postError: any,
// };
// class WriteActionButtonsContainer extends React.Component<IProps, IState, History> {
//   constructor(props: IProps) {
//     super(props);

//     console.log(props);

//     this.state = {
//       content: '',
//       rating: 0,
//       title: '',
//       wid: 0,
//       post: null,
//       postError: null,
//     };

//     this.onPublish = this.onPublish.bind(this);
//     this.onCancel = this.onCancel.bind(this);
//   }

//   render() {
//     let { content, rating, title, wid } = this.state;
//     let { post, postError } = this.props;
//     if(!post){
//       return (
//         <div>
//           <WriteActionButtons onPublish={this.onPublish} onCancel={this.onCancel} />;
//           {(function () {
//             if(postError) {
//               return <span>재작성해주세요.</span>
//             }
//           })}
//         </div>

//       );
//     }
//     else {
//       return (
//         <div>

//         </div>
//       )
//     }
//   }

//   async onPublish(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     let { content, rating, title, wid } = this.state;
//     // action 에서 함수 불러오기 =
//     await this.props.dispatch(writePost({
//       content,
//       title,
//       rating,
//       wid,
//     }));
//   }
//   async onCancel() {
//     return history.back;
//   }
// }

// export default WriteActionButtonsContainer;