import React from 'react';
import { blogs } from '../data';
import BlogCard from './BlogCard';
import { Helmet } from 'react-helmet';

const AllBlogs = () => {
  return (
    <>
      <Helmet>
        <title>All Blogs</title>
      </Helmet>
      <div className="flex justify-center items-center flex-col w-full px-10">
        <h2 className="text-4xl font-bold my-10">All Blogs</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {blogs?.map((blog) => (
            <BlogCard blogData={blog} key={blog?.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllBlogs;
