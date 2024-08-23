import React from "react";
import Navigation from "../../components/navigation/Navigation";
import BlogCards from "../../components/cards/BlogCards";

const Blogs = () => {
  const blogData = [
    {
      title: "Exploring the Future of Technology",
      date: "August 22, 2024",
      image: "../../../assets/sampleplaceholder.png",
      content: "In the rapidly evolving world of technology, we are witnessing groundbreaking innovations that are reshaping the future. From artificial intelligence to quantum computing, the potential of these advancements is limitless. This blog explores the latest trends and predicts what the future might hold for various tech sectors, including the impact on our daily lives and the global economy."
    },
    {
      title: "The Rise of Sustainable Practices",
      date: "August 23, 2024",
      image: "../../../assets/sampleplaceholder.png",
      content: "Sustainability is becoming a central theme across industries as businesses and individuals alike strive to reduce their environmental impact. This article delves into the importance of adopting sustainable practices, highlighting successful case studies, and offering practical tips for integrating eco-friendly methods into everyday life. Learn how small changes can contribute to a larger global effort."
    },
    {
      title: "Navigating the Challenges of Remote Work",
      date: "August 24, 2024",
      image: "../../../assets/sampleplaceholder.png",
      content: "Remote work has transformed the traditional work environment, bringing both opportunities and challenges. This blog addresses the key issues faced by remote workers, including maintaining productivity, work-life balance, and staying connected with colleagues. Discover strategies for overcoming these challenges and making the most of the remote work experience."
    },
    {
      title: "The Evolution of Digital Marketing Strategies",
      date: "August 25, 2024",
      image: "../../../assets/sampleplaceholder.png",
      content: "Digital marketing continues to evolve with advancements in technology and changes in consumer behavior. This article explores the latest strategies in digital marketing, including the use of social media, data analytics, and personalized content. Understand how businesses can adapt to these changes to effectively reach and engage their target audience."
    },
  ];
    
  
  return (
    <div className="px-[10%] lg:gap-10 gap-2 text-[#FDFDFD] font-rubik flex flex-col justify-center items-center h-auto py-[3%]">
      <div className="w-[100%] text-center">
        <h1 className="font-bold text-3xl">BLOGS</h1>
      </div>
      <div className="w-[100%] flex flex-col justify-center gap-14 lg:align-middle lg:py-0 py-[3%] pb-[%10] h-auto overflow-auto">
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
