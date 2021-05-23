import React, { FC, useEffect } from "react";
import ProfilePresenter from "./ProfilePresenter";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getProfile,
  profileSelector,
} from "../../features/profile/profileSlice";
import Loading from "../../shared/components/Loading";
import { useLocation } from "react-router-dom";
import NotFound from "../../shared/components/NotFound";

interface Props {}

const ProfileContainer: FC<Props> = () => {
  const { pathname } = useLocation();
  const [_, route, id] = pathname.split("/");
  const {
    selected: { profile, status },
  } = useAppSelector(profileSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile(+id));
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  if (!profile) {
    return <NotFound />;
  }

  return <ProfilePresenter profile={profile} />;
};

export default ProfileContainer;
