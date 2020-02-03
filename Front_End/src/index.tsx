import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import IndexProvider from '../Provider';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css';

const theme = createMuiTheme({
  typography: {
      fontFamily: 'Cafe24Shiningstar',
      fontSize: 18,
  },

});
​
ReactDOM.render(<MuiThemeProvider theme={theme}>
  <IndexProvider />
  </MuiThemeProvider>,
  document.getElementById('root')
);
