import React from 'react';
import EditorContainer from './containers/EditorContainer';
import WriteActionButtonsContainer from './containers/WriteActionButtonsContainer';
import WriteActionButtons from './WriteActionButtons';

interface wid {
  wid: number
}

export default function WritePage({wid}:wid) {
  return(
    <div>
      <EditorContainer  wineId={wid} />
      <WriteActionButtonsContainer/>
    </div>
  );
}