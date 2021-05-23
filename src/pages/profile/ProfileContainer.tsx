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

interface Props {
  match: {
    params: {
      id: string | undefined;
    };
  };
}

const ProfileContainer: FC<Props> = ({
  match: {
    params: { id },
  },
}) => {
  const { pathname } = useLocation();
  const {
    selected: { profile, status },
  } = useAppSelector(profileSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    id && dispatch(getProfile(+id));
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed" || !profile) {
    return <NotFound />;
  }

  return <ProfilePresenter profile={profile} />;
};

export default ProfileContainer;
