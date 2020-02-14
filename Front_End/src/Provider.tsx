import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../stores/login/store";
import App from "./App";
import Navbar from "./components/App/Navbar";
import Footer from "./components/App/Footer";
import Section from "./components/App/Section";
import { BrowserRouter, Route } from "react-router-dom";
import List from "./components/List_page/List";
import WineDetail from "./components/WineDetail/WineDetail";
import Entrance from "./components/App/Entrance";
import WineReview from "./components/Review_Page/List";
// import SignUp from "./stores/login/components/SignUp";
import ReviewList from "./components/Review_Page/ReviewCRUD/ReviewList";
import SignUp from "./components/App/SignUp";
import MyAccount from "./components/App/MyAccount";
import SmartSearch from "./components/smartSearch/WineSearch";
import ReviewDetail from "./components/Review_Page/ReviewCRUD/ReviewDetail";
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
          <div>
            <Route exact={true} path="/" component={Entrance} />
            <Route path="/ranking" component={App} />
            <Route path="/list" component={List} />
            <Route path="/detail/:wid" component={WineDetail} exact={true} />
            <Route path="/reviewList" component={ReviewList} />
            <Route path="/reviewDetail" component={ReviewDetail} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/smartSearch" component={SmartSearch} />
            <Route path="/myAccount" component={MyAccount} />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppForm;
