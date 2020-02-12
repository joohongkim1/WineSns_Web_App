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

export default function WriteActionButtons(params: { onCancel: any, onPublish: any}){
  return (
    <div>
      <Button onClick={params.onPublish}>
        포스트 등록
      </Button>
      <Button onClick={params.onCancel}>
        취소
      </Button>
    </div>
  );
};