import React, { useState } from "react";
import fields, { Field } from "../../data/fields";

const Fields = () => {
  const [selected, setSelected] = useState<Field>(fields[0]);

  return (
    <div className="flex flex-row mx-auto px-20 py-4 lg:w-web w-full">
      <div className="lg:w-1/2 w-full overflow-x-scroll flex lg:overflow-auto lg:flex-wrap">
        {fields.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg flex flex-col border border-main-100 w-36 h-36 rounded-xl
                        justify-start items-center flex-shrink-0 h-48 mx-1 mt-1 mb-1 cursor-pointer"
            onClick={() => {
              setSelected(item);
            }}
          >
            <div className="flex items-center w-28 h-28">
              <img src={item.img} alt="img" className="w-full h-30" />
            </div>
            <span className="text-center text-14">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="w-full lg:w-1/2 flex items-center">
        <div>
          <h3 className="py-6 font-semibold text-lg lg:pt-12 lg:text-xl">
            {selected.name}
          </h3>
          <p dangerouslySetInnerHTML={{ __html: selected.content }} />
        </div>
      </div>
    </div>
  );
};

export default Fields;
