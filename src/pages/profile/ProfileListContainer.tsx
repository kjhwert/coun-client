import React, { FC, useEffect } from "react";
import ProfileListPresenter from "./ProfileListPresenter";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getProfiles,
  profileSelector,
} from "../../features/profile/profileSlice";
import Loading from "../../shared/components/Loading";

interface Props {}

const ProfileListContainer: FC<Props> = () => {
  const { profiles, status } = useAppSelector(profileSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  return <ProfileListPresenter profiles={profiles} />;
};

export default ProfileListContainer;
