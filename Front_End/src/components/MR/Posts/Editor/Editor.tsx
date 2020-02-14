import React, {useRef, useEffect} from 'react';
// import * as Quill from 'quill';
import * as Q from 'quill';
import Button from '@material-ui/core/Button';

const Quill: any = Q;
// import styled from 'styled-components'
import { makeStyles, Theme, createStyles, styled } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  }),

);

// export default function Editor(params: { title: string, body: string, onChangeField: any}) {
export default function Editor() {
  const quillElement = useRef<any>();
  const quillInstance = useRef<any>();
  const [contents, setContents] = React.useState('');

  const sendFeed = async () => {
    console.log(quillInstance);
  }
  
  
  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      modules:
        {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block']
          ]
        },
        placeholder: 'Compose an epic...',
        theme: 'snow'  // or 'bubble'
    });
  })
  return (
    <div>
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