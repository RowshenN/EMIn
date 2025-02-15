import React from "react";
import right from "../images/right-arrow.png";
import left from "../images/left-arrow.png";

function Pagination({ meta, onPageChange }) {
  if (!meta) {
    return null;
  }

  const { current_page, last_page } = meta;

  const handlePageClick = (page) => {
    if (page !== current_page && page <= last_page && page >= 1) {
      onPageChange(page);
    }
  };

  const handlePreviousClick = () => {
    if (current_page > 1) {
      handlePageClick(current_page - 1);
    }
  };

  const handleNextClick = () => {
    if (current_page < last_page) {
      handlePageClick(current_page + 1);
    }
  };

  return (
    <nav
      aria-label="Page navigation"
      className="flex justify-center w-full mt-4"
    >
      <ul className="inline-flex items-center justify-center gap-2">
        <li className={`page-item ${current_page === 1 ? "disabled" : ""}`}>
          <button
            className="px-3 py-1 flex items-center justify-center"
            onClick={handlePreviousClick}
            disabled={current_page === 1}
          >
            <img
              src={left}
              alt="arrow"
              className="h-[30px] w-[30px] object-cover cursor-pointer"
            />
          </button>
        </li>

        {Array.from({ length: last_page }, (_, i) => i + 1).map((page) => (
          <li
            key={page}
            className={`page-item ${
              current_page === page
                ? "active bg-[#009833] rounded-full px-2 text-white"
                : "px-3 py-1 flex items-center justify-center"
            }`}
          >
            <button className="page-link" onClick={() => handlePageClick(page)}>
              {page}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            current_page === last_page ? "disabled" : ""
          }`}
        >
          <button
            className="px-3 py-1 flex items-center justify-center"
            onClick={handleNextClick}
            disabled={current_page === last_page}
          >
            <img
              src={right}
              alt="arrow"
              className="h-[30px] w-[30px] object-cover cursor-pointer"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
