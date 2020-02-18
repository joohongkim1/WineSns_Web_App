import React from 'react';
import EditorContainer from './containers/EditorContainer';
import WriteActionButtonsContainer from './containers/WriteActionButtonsContainer';
import WriteActionButtons from './WriteActionButtons';

export default function WritePage() {
  return(
    <div>
      <EditorContainer />
      <WriteActionButtonsContainer />
    </div>
  );
}