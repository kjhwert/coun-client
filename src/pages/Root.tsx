import React from "react";
import Header from "../shared/components/Header";
import Banner from "../shared/components/Banner";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Home from "./home";
import Reserve from "./reserve";
import InterviewList from "./interview";
import Interview from "./interview/Interview";
import GalleryList from "./gallery";
import Gallery from "./gallery/Gallery";
import Admin from "./admin";
import Login from "./admin/Login";
import NotFound from "../shared/components/NotFound";
import Footer from "../shared/components/Footer";
import TalkListContainer from "./talk/TalkListContainer";
import TalkContainer from "./talk/TalkContainer";
import ReserveButton from "../shared/components/ReserveButton";
import ProfileListContainer from "./profile/ProfileListContainer";
import ProfileContainer from "./profile/ProfileContainer";

const Root = () => {
  const { pathname } = useLocation();

  if (pathname.includes("admin")) {
    return (
      <Switch>
        <Route path="/admin" exact component={Admin} />
        <Route path="/admin/login" component={Login} />
        <Route path="/admin/404" component={NotFound} />
        <Redirect path="/**" to="admin/404" />
      </Switch>
    );
  }

  return (
    <>
      <Header />
      <Banner />
      <ReserveButton />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/reserve" component={Reserve} />
        <Route path="/talk" exact component={TalkListContainer} />
        <Route path="/talk/:id" component={TalkContainer} />
        <Route path="/profile" exact component={ProfileListContainer} />
        <Route path="/profile/:id" exact component={ProfileContainer} />
        <Route path="/interview" exact component={InterviewList} />
        <Route path="/interview/:id" component={Interview} />
        <Route path="/gallery" exact component={GalleryList} />
        <Route path="/gallery/:id" component={Gallery} />
        <Route path="/404" component={NotFound} />
        <Redirect path="/**" to="/404" />
      </Switch>
      <Footer />
    </>
  );
};

export default Root;
