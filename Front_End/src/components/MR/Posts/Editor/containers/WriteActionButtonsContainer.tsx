import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import WriteActionButtons from '../WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { writePost } from '../../../../../../stores/mysns/actions/write';

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
  const dispatch = useDispatch();
  const { content, rating, title, wid, post, postError } = useSelector(( write: write ) => ({
    content: write.content,
    title: write.title,
    rating: write.rating,
    wid: write.wid,
    post: write.post,
    postError: write.postError,
  }));

  // 포스트 등록
  const onPublish = () => {
    dispatch(
      writePost({
        content,
        title,
        rating,
        wid,
        
      }),
    );
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