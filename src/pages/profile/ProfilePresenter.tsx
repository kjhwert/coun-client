import React, { FC } from "react";
import { Profile } from "../../features/profile/profileSlice";
import { BASE_URL } from "../../shared/common";

interface Props {
  profile: Profile;
}

const ProfilePresenter: FC<Props> = ({
  profile: { name, description, image },
}) => {
  return (
    <div className={`flex flex-col items-center py-8`}>
      <img
        src={`${BASE_URL}${image.path}`}
        alt={image.name}
        className="rounded-full w-36 h-36"
      />
      <h3 className="py-6 font-semibold text-lg lg:text-xl">{name} 선생님</h3>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default ProfilePresenter;
