import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./stores/login/store/configure";
import App from "./src/App";
import Navbar from "./src/components/App/Navbar";
import Footer from "./src/components/App/Footer";
import Section from "./src/components/App/Section";
import { BrowserRouter, Route } from "react-router-dom";
import MyReview from "./src/components/MyReview";
import List from "./src/components/List_page/List";
import WineDetail from "./src/components/WineDetail/WineDetail";
import Entrance from "./src/components/App/Entrance";
// import SignUp from "./stores/login/components/SignUp";
import SignUp from "./src/components/App/SignUp";
class AppForm extends Component {
  public store = (): object => {
    const store = Object.assign({}, this.props);
    return configureStore(store);
  };

  public render(): JSX.Element {
    return (
      <Provider store={this.store() as any}>
        <BrowserRouter>
          <Navbar />
          <Route exact={true} path="/" component={Entrance} />
          <Route path="/ranking" component={App} />
          <Route path="/myreview" component={MyReview} />
          <Route path="/list" component={List} />
          <Route path="/detail" component={WineDetail} />
          <Route path="/signUp" component={SignUp} />
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppForm;
