import React from 'react';

import right from "../images/right-arrow.png"
import left from "../images/left-arrow.png"

function Pagination({ meta, onPageChange }) {
  if (!meta) {
    return null;
  }

  const { current_page, last_page, links } = meta;

  const handlePageClick = (page) => {
    if (page !== current_page && page <= last_page && page >= 1) {
      onPageChange(page);
    }
  };

  return (
    <nav aria-label="Page navigation" className="flex justify-center w-full mt-4">
      <ul className="inline-flex items-center justify-center gap-2"> {/* Removed -space-x-px */}
        {links.map((link, index) => {
          let className = "px-3 w-full py-1 flex items-center justify-center";

          if (link.active) {
            className += " bg-[#009833] rounded-full px-1 text-white ";
          } else if (link.url === null || link.label === "...") {
            className += " ";
          }

          let labelContent = link.label; // Default label content

          if (link.label.includes("Previous")) { // Check for "« Previous"
            labelContent = (
              <>
                <img src={left} alt="arrow" className='h-[30px] w-[30px] object-cover cursor-pointer' />
                {/* <span>Previous</span> Added text label */}
              </>
            );
          } else if (link.label.includes("Next")) { // Check for "Next »"
            labelContent = (
              <>
                {/* <span>Next</span> */}
                <img src={right} alt="arrow" className='h-[30px] w-[30px] object-cover cursor-pointer' />
              </>
            );
          }

          return (
            <li key={index}>
              <button
                className={className}
                onClick={() => handlePageClick(link.label)}
                disabled={link.url === null || link.label === "..."}
              >
                {labelContent}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;