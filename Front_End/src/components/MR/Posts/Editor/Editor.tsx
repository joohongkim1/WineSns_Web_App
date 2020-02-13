import React, {useRef, useEffect} from 'react';
// import * as Quill from 'quill';
import * as Q from 'quill';
import Button from '@material-ui/core/Button';

const Quill: any = Q;
// import styled from 'styled-components'
import { makeStyles, Theme, createStyles, styled } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  }),

);



export default function Editor(params: { content: string, rating: number, title: string, wid: number, onChangeField: any }){
  const quillElement = useRef<any>();
  const quillInstance = useRef<any>();
<<<<<<< HEAD
  const [contents, setContents] = React.useState('');

  const sendFeed = async () => {
    console.log(quillInstance);
  }
  
  
=======

>>>>>>> eb5dfc7a1a542931b31f6992e8e246825c641abe
  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: '내용을 작성하세요...',
      modules: {
        // 더 많은 옵션
        // https://quilljs.com/docs/modules/toolbar/ 참고
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });

    // quill에 text-change 이벤트 핸들러 등록
    // 참고: https://quilljs.com/docs/api/#events
    const quill = quillInstance.current;
    quill.on('text-change', (delta: any, oldDelta: any, source : any) => {
      if (source === 'user') {
        params.onChangeField({ key: 'content', value: quill.root.innerHTML });
      }
    });
  }, [params.onChangeField]);

  const onChangeTitle = (e: any) => {
    params.onChangeField({ key: 'title', value: e.target.value });
  };

  return (
    <div>
<<<<<<< HEAD
      <div ref={quillElement}/>
      <div>
      <Button onClick={sendFeed}>
        포스트 등록
      </Button>
      <Button>
        취소
      </Button>
      </div>
    </div>
)
}
=======
      <input
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
        value={params.title}
      />
        <div ref={quillElement} />
      </div>
  );
};
>>>>>>> eb5dfc7a1a542931b31f6992e8e246825c641abe
