import React, { useState } from "react";
import { Profile, profiles } from "../../data/profiles";

const Profiles = () => {
  const [selected, setSelected] = useState<Profile>(profiles[0]);

  return (
    <div
      className="flex flex-row mx-auto p-20"
      style={{ width: "1200px", height: "850px" }}
    >
      <div className="w-1/3 flex lg:overflow-auto lg:flex-wrap flex-col items-center justify-center">
        <div>
          <h3 className="py-6 font-semibold text-lg lg:text-xl">
            {selected.name}
          </h3>
          <p dangerouslySetInnerHTML={{ __html: selected.content }} />
        </div>
      </div>
      <div className="w-2/3 flex items-center">
        <div
          style={{ height: "450px" }}
          className="flex lg:flex-wrap justify-end items-center"
        >
          {profiles.map((item) => (
            <div
              key={item.id}
              className="lg:cursor-pointer items-center lg:m-4 flex flex-col"
              style={{ width: "170px" }}
              onClick={() => {
                setSelected(item);
              }}
            >
              <img
                src={item.img}
                alt="profile"
                className="w-full rounded-full"
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
