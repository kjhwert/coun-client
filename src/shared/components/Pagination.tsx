import React from "react";

interface Props {
  hasMorePage: boolean;
  onClick: () => void;
}

const Pagination = ({ hasMorePage, onClick }: Props) => {
  return (
    <div className="mt-8 mb-8">
      {hasMorePage && (
        <span
          onClick={onClick}
          className="p-4 text-14 text-main-300 cursor-pointer"
        >
          more
        </span>
      )}
    </div>
  );
};

export default Pagination;
