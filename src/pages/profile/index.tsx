import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Loading from "../../shared/components/Loading";
import {
  getProfiles,
  profileSelector,
  onSelected,
} from "../../features/profile/profileSlice";
import { BASE_URL } from "../../shared/common";

interface Props {}

const Index: FC<Props> = () => {
  const { profiles, status, selected } = useAppSelector(profileSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);

  if (!selected || status === "loading") {
    return <Loading />;
  }

  return (
    <div className="flex lg:flex-row flex-col-reverse mx-auto my-10 lg:mt-0 lg:p-20 lg:w-web lg:h-web">
      <div className="lg:w-1/3 w-full flex lg:flex-wrap flex-col justify-center pl-4 lg:pl-0">
        <div>
          <h3 className="py-6 font-semibold text-lg lg:text-xl">
            {selected.name}
          </h3>
          <p dangerouslySetInnerHTML={{ __html: selected.description }} />
        </div>
      </div>
      <div className="lg:w-2/3 w-full flex items-center overflow-x-scroll">
        <div className="flex lg:flex-wrap justify-end items-center ml-4 mr-4">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="lg:cursor-pointer items-center mr-2 lg:m-4 flex flex-col w-36 lg:w-40"
              onClick={() => {
                dispatch(onSelected(profile));
              }}
            >
              <img
                src={`${BASE_URL}${profile.image.path}`}
                alt="profile"
                className="w-full rounded-full mb-4"
              />
              <span>{profile.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
