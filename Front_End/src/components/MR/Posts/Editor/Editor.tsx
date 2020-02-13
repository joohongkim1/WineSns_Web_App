import React, {useRef, useEffect} from 'react';
// import * as Quill from 'quill';
import * as Q from 'quill';
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
      <button type="button" onClick={() => setContents(contents + quillElement.current)}>
              업로드
      </button>
    </div>
)
}