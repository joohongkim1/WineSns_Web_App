import * as React from "react";
import Ranking from "./components/Ranking/Ranking";
import Top3 from "./components/Ranking/Top3";

class App extends React.Component {
  render() {
    return (
      <div>
        <Top3 />
        <Ranking />
      </div>
    );
  }
}

export default App;
