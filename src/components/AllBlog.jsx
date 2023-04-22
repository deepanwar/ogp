import React from 'react';
import { blogs } from '../data';
import BlogCard from './BlogCard';
import { Helmet } from 'react-helmet-async';

const AllBlogs = () => {
  return (
    <>
      <Helmet>
        <title>All Blogs</title>
        <meta
          name="description"
          content="Learn design and code by building real apps with React and Swift. Complete courses about UI design, web and iOS development using Figma, CSS, React Hooks and SwiftUI."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.designcode.io" />
        <meta
          property="og:title"
          content="Design+Code - Learn to design and code React and Swift apps"
        />
        <meta
          property="og:description"
          content="Learn design and code by building real apps with React and Swift. Complete courses about UI design, web and iOS development using Figma, CSS, React Hooks and SwiftUI."
        />
        <meta
          property="og:image"
          content="https://designcode.io/cloud/v2/twitter.jpg"
        />
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
