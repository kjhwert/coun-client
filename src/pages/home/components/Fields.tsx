import React, { useState } from "react";
import fields, { Field } from "../../../data/fields";

const Fields = () => {
  const [selected, setSelected] = useState<Field>(fields[0]);

  return (
    <div className="flex flex-col lg:flex-col mx-auto lg:px-20 px-4 mt-10 lg:w-web w-full">
      <h3 className="py-6 font-semibold text-lg lg:pt-12 lg:text-xl">
        상담분야
      </h3>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full overflow-x-scroll flex lg:overflow-auto lg:flex-wrap">
          {fields.map((field) => (
            <div
              key={field.id}
              className="bg-white shadow-lg flex flex-col border border-main-100 lg:w-36 lg:h-36 rounded-xl
                        justify-start items-center flex-shrink-0 mx-1 mt-1 mb-1 cursor-pointer p-2"
              onClick={() => {
                setSelected(field);
              }}
            >
              <div className="flex items-center w-28 h-28">
                <img src={field.img} alt="img" className="w-full h-30" />
              </div>
              <span className="text-center text-14">{field.name}</span>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 flex flex-col px-2">
          <h3 className="py-6 font-semibold text-base lg:pt-12 lg:text-lg">
            {selected.name}
          </h3>
          <p
            dangerouslySetInnerHTML={{ __html: selected.content }}
            className="text-sm mb-4 lg:text-base lg:mb-0 h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Fields;
