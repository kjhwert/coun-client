import React, { FC } from "react";
import { Profile } from "../../features/profile/profileSlice";
import { BASE_URL } from "../../shared/common";
import { MOBILE_PADDING } from "../../shared/styles";
import { Link } from "react-router-dom";

interface Props {
  profiles: Profile[];
}

const ProfileListPresenter: FC<Props> = ({ profiles }) => {
  return (
    <div
      className={`grid grid-cols-2 lg:grid-cols-4 gap-6 ${MOBILE_PADDING} my-12`}
    >
      {profiles.map(({ id, image, name, grade }) => (
        <Link
          key={id}
          to={`profile/${id}`}
          className="lg:flex lg:items-center lg:flex-col lg:px-12"
        >
          <img
            src={`${BASE_URL}${image.path}`}
            alt={image.name}
            className="rounded-full lg:w-48"
          />
          <h3 className="text-lg text-center mt-6">{name} 선생님</h3>
          <p className="text-center text-base mt-2 text-main-300">{grade}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProfileListPresenter;
