import React, { useState } from "react";
import { Profile, profiles } from "../../data/profiles";

const Profiles = () => {
  const [selected, setSelected] = useState<Profile>(profiles[0]);

  return (
    <div className="flex lg:flex-row flex-col-reverse mx-auto my-10 lg:mt-0 lg:p-20 lg:w-web lg:h-web">
      <div className="lg:w-1/3 w-full flex lg:flex-wrap flex-col justify-center pl-4 lg:pl-0">
        <div>
          <h3 className="py-6 font-semibold text-lg lg:text-xl">
            {selected.name}
          </h3>
          <p dangerouslySetInnerHTML={{ __html: selected.content }} />
        </div>
      </div>
      <div className="lg:w-2/3 w-full flex items-center overflow-x-scroll">
        <div className="flex lg:flex-wrap justify-end items-center ml-4 mr-4">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="lg:cursor-pointer items-center mr-2 lg:m-4 flex flex-col w-36 lg:w-40"
              onClick={() => {
                setSelected(profile);
              }}
            >
              <img
                src={profile.img}
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

export default Profiles;
