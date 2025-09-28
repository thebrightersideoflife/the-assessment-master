import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {item.path ? (
              <Link
                to={item.path}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#4169E1] transition-colors"
                aria-current={index === items.length - 1 ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm font-medium text-gray-500">
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <AiOutlineRight className="mx-2 text-gray-400" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
