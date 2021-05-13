import React from "react";
import Header from "../shared/components/Header";
import Banner from "../shared/components/Banner";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import Home from "./home";
import Reserve from "./reserve";
import Profile from "./profile";
import InterviewList from "./interview";
import Interview from "./interview/Interview";
import GalleryList from "./gallery";
import Gallery from "./gallery/Gallery";
import Admin from "./admin";
import Login from "./admin/Login";
import NotFound from "../shared/components/NotFound";
import Footer from "../shared/components/Footer";
import { useAppSelector } from "../app/hooks";
import { userSelector } from "../features/user/userSlice";
import TalkListContainer from "./talk/TalkListContainer";
import TalkContainer from "./talk/TalkContainer";

const Root = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { user } = useAppSelector(userSelector);

  if (pathname.includes("admin")) {
    //TODO user가 null일때 어떻게 redirect ㅎㅏㄹ 수 있을까?
    return (
      <Switch>
        <Route path="/admin" exact component={Admin} />
        <Route path="/admin/login" component={Login} />
      </Switch>
    );
  }

  return (
    <>
      <Header />
      <Banner />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/reserve" component={Reserve} />
        <Route path="/talk" exact component={TalkListContainer} />
        <Route path="/talk/:id" component={TalkContainer} />
        <Route path="/profile" exact component={Profile} />
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
