import React, { useEffect, useCallback, useState } from 'react';
import Editor from '../Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../../../../stores/mysns/actions/write';
import ReviewInfo from '../.././Review';


interface write {
  content: string,
  rating: number,
  title: string,
  wid: number,
}
interface params {
  review: ReviewInfo;
}


const EditorContainer = ({review}: params) => {
  const dispatch = useDispatch();
  const { content, rating, title, wid } = useSelector(( write: write) => ({
    content: write.content,
    rating: write.rating,
    title: write.title,
    wid: write.wid
  }));
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch,
  ]);

  // 언마운트될 때 초기화
  useEffect(() => {
    dispatch(onChangeField({ key: 'wid', value: review.wine.wid }));
    dispatch(onChangeField({ key: 'content', value: review.content }));
    dispatch(onChangeField({ key: 'title', value: review.title }));
    dispatch(onChangeField({ key: 'rating', value: review.rating }));
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <Editor onChangeField={onChangeField} contentChange={content} ratingChange={rating} titleChange={title} widChange={wid} />;
};

export default EditorContainer;