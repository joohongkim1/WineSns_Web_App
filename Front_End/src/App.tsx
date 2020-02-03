import * as React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Ranking from "./components/Ranking";
import Top3 from "./components/Top3";
import SignUp from "./components/SignUp";
class App extends React.Component{
  render() {
    return (<div>
    
      <Top3/>
      <Ranking/>
    
    </div>
    );
  }
}

export default App;