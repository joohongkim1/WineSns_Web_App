import React from 'react';
import MainContent from './MainContent';
import {RouteComponentProps} from 'react-router-dom';

interface RouterProps { // type for `match.params`
    title: string; // must be type `string` since value comes from the URL
}

interface MyComponentProps extends RouteComponentProps<RouterProps> {
  title : string;
}
export default function MyPageList(props:MyComponentProps) {

  if (props.match.params.title === 'mylikes') {
    return (
      <div></div>
    );
  }
  else {
    return (
      <div></div>
    );
  }
}