import React from "react";
import Navigation from "../../components/navigation/Navigation";
import BlogCards from "../../components/cards/BlogCards";

const Blogs = () => {
  const blogData = [
    {
      title: "Sample Blog Title",
      date: "August 22, 2024",
      image: "../../../assets/sampleplaceholder.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, ut praesentium reiciendis iure dolore similique aliquam libero corporis, culpa exercitationem pariatur possimus doloremque repellat atque esse facilis, vel totam unde repellendus laboriosam voluptatum! Sit velit quia commodi molestiae ex voluptas reiciendis itaque temporibus, exercitationem deserunt recusandae impedit nam deleniti sed ducimus minus quasi dignissimos nemo et sequi unde eius cumque?"
    },
    {
      title: "Another Blog Title",
      date: "August 23, 2024",
      image: "../../../assets/sampleplaceholder.png",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nesciunt harum ipsam at omnis nihil molestiae deserunt distinctio iste cumque. Repudiandae quas exercitationem officia ipsum veniam laboriosam sapiente, maxime tenetur, distinctio obcaecati, incidunt culpa nam fuga voluptatibus ullam voluptates iure. Voluptates sint perferendis soluta labore? Quidem hic facilis modi iste?"
    },
  ]
    
  
  return (
    <div className="px-[10%] gap-10 text-[#FDFDFD] font-rubik flex flex-col justify-center items-center h-auto py-[3%]">
      <div className="w-[100%] text-left">
        <h1 className="font-bold text-4xl">BLOGS</h1>
      </div>
      <div className="w-[100%] flex flex-col justify-center align-middle lg:py-0 py-[10%] mb-20 h-72 lg:h-auto overflow-auto gap-4">
        {blogData.map((blog, index) => (
          <BlogCards
            key={index}
            title={blog.title}
            date={blog.date}
            img={blog.image}
            description={blog.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
