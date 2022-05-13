import React from "react";
import { StylesProvide } from '../../../../node_modules/@material-ui/core/index';
import { CssBaseline} from '@material-ui/core';
import GlobalStyle from './Commons/Styles/global-styles'
import Main from './Containers/Main/index'

function App() {
   return (
    <StylesProvide injectFirst>
      <CssBaseline/>
      <GlobalStyle/>
      <div>
        tsts
      </div>
    </StylesProvide>
  );
}

export default App;
