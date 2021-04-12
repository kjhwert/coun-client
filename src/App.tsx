import React, { useEffect } from "react";
import Talk from "./features/talk/Talk";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from "./modules/components/NotFound";
import Home from "./features/home/Home";
import Header from "./modules/components/Header";
import Banner from "./modules/components/Banner";
import Footer from "./modules/components/Footer";

export default () => {
  return (
    <Router>
      <Header />
      <Banner />
      <Switch>
        <Route path="/" exact component={Home} />
        {/*<Route path="/reserve" component={ReserveContainer} />*/}
        <Route path="/talk" exact component={Talk} />
        {/*<Route path="/talk/register" component={TalkRegisterContainer} />*/}
        {/*<Route path="/talk/:id" component={TalkDetailContainer} />*/}
        {/*<Route path="/interview" exact component={InterviewContainer} />*/}
        {/*<Route path="/interview/:id" component={InterviewDetailContainer} />*/}
        {/*<Route path="/gallery" exact component={GalleryContainer} />*/}
        {/*<Route path="/gallery/:id" component={GalleryDetailContainer} />*/}
        <Route path="/404" component={NotFound} />
        <Redirect path="/**" to="/404" />
      </Switch>
      <Footer />
      <ToastContainer />
    </Router>
  );
};
