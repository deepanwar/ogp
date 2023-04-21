import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blogData }) => {
  return (
    <>
      <Link to={`/${blogData?.id}`}>
        <div className="flex flex-col rounded bg-gray-200">
          <img
            src={blogData?.image}
            alt="blog"
            className="aspect-video rounded-t"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{blogData?.title}</h3>
            <p className="text-sm text-gray-500">{blogData?.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
