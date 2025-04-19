import React, { useState } from "react";
import BlogCards from "@src/components/cards/BlogCards";
import { blogData } from "@src/contents/blogs/blogData";
import { Button } from "@src/components/button/Button";
import { ArrowLeft, BookOpenCheck } from "lucide-react"; // Lucide icons

const Blogs = () => {
  const [activeBlogId, setActiveBlogId] = useState(null);

  const selectedBlog = blogData.find((b) => b.id === activeBlogId);

  const handleBack = () => {
    setActiveBlogId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="px-6 md:px-[10%] py-12 md:py-[6%] font-rubik text-white">
      {!activeBlogId ? (
        <>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-[#F5B301] mb-10">
            BLOGS
          </h1>

          {blogData.length === 0 ? (
            <div className="text-center text-lg mt-20 text-gray-400 flex flex-col items-center gap-4">
              <BookOpenCheck size={48} className="text-[#F5B301]" />
              <p>No blog posts available yet. Please check back soon!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-16">
              {blogData.map((blog) => (
                <div
                  key={blog.id}
                  className="transition-transform duration-300 transform hover:scale-[1.01]"
                >
                  <BlogCards
                    id={blog.id}
                    title={blog.title}
                    date={blog.date}
                    image={blog.image}
                    description={blog.summary}
                    onReadClick={() => setActiveBlogId(blog.id)}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="relative animate-fade-in">
          <div className="flex justify-start mb-6">
            <Button
              variant="long_outline"
              onClick={handleBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft size={18} /> Back to Blogs
            </Button>
          </div>

          <div className="rounded-lg shadow-md bg-[#1e1e1e] p-6 md:p-10">
            {selectedBlog?.component ? (
              selectedBlog.component
            ) : (
              <div className="text-gray-400 text-center py-10">
                <BookOpenCheck className="mx-auto mb-4 text-[#F5B301]" size={36} />
                <p>This blog post is currently unavailable.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
