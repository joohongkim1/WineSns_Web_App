import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./stores/login_form/store/configure";
import App from "./src/App";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";
import Section from "./src/components/Section";
import { BrowserRouter, Route } from "react-router-dom";
import MyReview from "./src/components/MyReview";
import List from "./src/components/List_page/List";
import WineDetail from "./src/components/WineDetail";
import Entrance from "./src/components/Entrance";

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
         
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppForm;
