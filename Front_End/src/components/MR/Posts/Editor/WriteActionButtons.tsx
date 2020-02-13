import React from 'react';
import Button from '@material-ui/core/Button';

import { makeStyles, Theme, createStyles, styled } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     buttonStyle: {
//       height: "2.125rem",

//     },

//   }),

// );

// export default function WriteActionButtons(params: { onCancel: any, onPublish: any}){
  export default function WriteActionButtons(){
  return (
    <div>
      {/* <Button onClick={params.onPublish}> */}
      <Button>
        포스트 등록
      </Button>
      {/* <Button onClick={params.onCancel}> */}
      <Button>
        취소
      </Button>
    </div>
  );
};