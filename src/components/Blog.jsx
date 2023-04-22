import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { blogs } from '../data';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const { id: blogId } = useParams();
  console.log(blogId);
  const [currentBlog, setCurrentBlog] = useState({});

  useEffect(() => {
    const blog = blogs?.find((item) => parseInt(item.id) === parseInt(blogId));
    // console.log(blog);
    setCurrentBlog(blog);
  }, [blogId]);

  return (
    currentBlog && (
      <>
        <Helmet>
          <title>
            Design+Code - Learn to design and code React and Swift apps
          </title>
          <meta
            name="description"
            content="Learn design and code by building real apps with React and Swift. Complete courses about UI design, web and iOS development using Figma, CSS, React Hooks and SwiftUI."
          />

          {/* Twitter meta tags below */}
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:image"
            content="https://designcode.io/cloud/v2/twitter.jpg"
          />
          <meta
            name="twitter:title"
            content="Design+Code - Learn to design and code React and Swift apps"
          />
          <meta name="twitter:creator" content="@diepsteph" />
          <meta name="twitter:site" content="@diepsteph" />
          <meta
            name="twitter:description"
            content="Learn design and code by building real apps with React and Swift. Complete courses about UI design, web and iOS development using Figma, CSS, React Hooks and SwiftUI."
          />

          {/* Facebook meta tags below */}
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
        <div className="flex flex-col max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center my-10">
            {currentBlog?.title}
          </h2>
          <img src={currentBlog?.image} alt="blog" className="aspect-video" />
          <p className="text-sm text-gray-400 mt-5">
            {currentBlog?.description}
          </p>
        </div>
      </>
    )
  );
};

export default Blog;
