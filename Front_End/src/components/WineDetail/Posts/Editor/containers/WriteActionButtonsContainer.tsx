import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import WriteActionButtons from '../WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import write, {writePost} from '../../../../../../stores/mysns/actions/write';
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


const WriteActionButtonsContainer = ( {onCancel}:any ) => {
  console.log('aaaaaaa')
  const dispatch = useDispatch();
  const { content, rating, title, wid, post, postError } = useSelector(( state: rootState ) => (
    state.write
  ));
  console.log(content, rating, title, wid, post, postError)
  function refreshPage() {
    window.location.reload(true);
  }
  // 포스트 등록
  const onPublish = () => {
    dispatch(
      refreshPage
    )
    console.log('publish')
    dispatch(
      writePost({
        content,
        rating,
        title,
        wid,
      }),
    );
  };


  // // 성공 혹은 실패시 할 작업
  // useEffect(() => {
  //   if (post) {
  //     const { _id, user } = post;
  //     history.push(`/@${user.username}/${_id}`);
  //   }
  //   if (postError) {
  //     console.log(postError);
  //   }
  // }, [history, post, postError]);
  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;

  
};

// export default withRouter(WriteActionButtonsContainer);
export default WriteActionButtonsContainer;
