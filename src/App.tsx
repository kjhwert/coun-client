import React from "react";
import TalkList from "./pages/talk";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from "./shared/components/NotFound";
import Home from "./pages/home";
import Header from "./shared/components/Header";
import Banner from "./shared/components/Banner";
import Footer from "./shared/components/Footer";
import Talk from "./pages/talk/Talk";
import Reserve from "./pages/reserve";
import Profile from "./pages/profile";

const App = () => {
  return (
    <Router>
      <Header />
      <Banner />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/reserve" component={Reserve} />
        <Route path="/talk" exact component={TalkList} />
        <Route path="/talk/:id" component={Talk} />
        <Route path="/profile" exact component={Profile} />
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

export default App;
