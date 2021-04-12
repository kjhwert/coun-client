import React, { useState } from "react";
import fields, { Field } from "../../data/fields";

const Fields = () => {
  const [selected, setSelected] = useState<Field>(fields[0]);

  return (
    <div
      className="flex flex-row mx-auto px-20 py-4"
      style={{ width: "1300px" }}
    >
      <div className="w-1/2 flex lg:overflow-auto lg:flex-wrap">
        {fields.map((item) => (
          <div
            key={item.id}
            style={{ borderRadius: "15px", width: "130px", height: "130px" }}
            className="bg-white shadow-lg flex flex-col border border-main-100
                        justify-start items-center flex-shrink-0 h-48 mx-1 mt-1 mb-1 cursor-pointer"
            onClick={() => {
              setSelected(item);
            }}
          >
            <div
              style={{ width: "100px", height: "100px" }}
              className="flex items-center"
            >
              <img src={item.img} alt="img" className="w-full h-30" />
            </div>
            <span className="text-center text-14">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="w-1/2 flex items-center">
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
