// src/components/blogPosts/Blog2.jsx
import React from "react";

const Blog2 = () => {
  return (
    <div className="text-[#FDFDFD] flex flex-col gap-6">
      {/* Title & Metadata */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F5B301] mb-2">
          The Rise of Sustainable Practices
        </h1>
        <p className="italic text-sm text-gray-400">Published: August 23, 2024</p>
      </div>

      {/* Cover Image */}
      <img
        src="https://images.unsplash.com/photo-1613297633403-6dff89f9fa53"
        alt="Sustainability"
        className="w-full max-h-[400px] object-cover rounded-md shadow-md"
      />

      {/* Introduction */}
      <p className="text-justify leading-7 indent-8 text-lg">
        Sustainability is no longer a buzzword — it’s a necessity. As climate change accelerates and resources dwindle, individuals, companies, and governments are embracing practices that prioritize long-term environmental health over short-term gains.
      </p>

      {/* Section 1: Corporate Shifts */}
      <h2 className="text-2xl font-semibold text-[#F5B301] mt-6">Business as a Force for Good</h2>
      <p className="text-justify leading-7 indent-8 text-base">
        More companies are committing to ESG (Environmental, Social, and Governance) principles. From reducing carbon footprints to investing in ethical supply chains, corporations are realizing that sustainability is not just good PR — it’s smart business.
      </p>
      <img
        src="https://images.unsplash.com/photo-1559526324-593bc073d938"
        alt="Eco-friendly business"
        className="w-full rounded-md shadow-md my-4"
      />

      {/* Section 2: Green Innovation */}
      <h2 className="text-2xl font-semibold text-[#F5B301] mt-6">Innovation in Renewable Energy</h2>
      <p className="text-justify leading-7 indent-8 text-base">
        Solar panels, wind farms, and battery technologies are no longer niche. With falling costs and improved efficiency, clean energy is powering homes, cities, and even entire nations. Initiatives like Tesla's Gigafactories and global solar projects are setting a new standard.
      </p>

      {/* Quote Block */}
      <blockquote className="border-l-4 border-[#F5B301] pl-4 italic text-gray-300">
        “We do not inherit the earth from our ancestors, we borrow it from our children.”
      </blockquote>

      {/* Section 3: Everyday Sustainability */}
      <h2 className="text-2xl font-semibold text-[#F5B301] mt-6">Sustainability Starts at Home</h2>
      <p className="text-justify leading-7 indent-8 text-base">
        From zero-waste kitchens to slow fashion, individuals are embracing lifestyle shifts. Conscious consumerism — buying less but better — is becoming the norm. Apps that track carbon footprints or reward eco-friendly behavior are gaining popularity.
      </p>
      <img
        src="https://images.unsplash.com/photo-1611078489935-75e50a5e5b44"
        alt="Sustainable living"
        className="w-full rounded-md shadow-md my-4"
      />

      {/* Section 4: Future Trends */}
      <h2 className="text-2xl font-semibold text-[#F5B301] mt-6">What the Future Holds</h2>
      <p className="text-justify leading-7 indent-8 text-base">
        As climate tech continues to evolve, expect new materials, circular economies, and carbon capture innovations to lead the next sustainability wave. Education and youth advocacy are also playing major roles in shaping future policies and behavior.
      </p>
      <ul className="list-disc list-inside ml-4 text-base text-[#FDFDFD]">
        <li>Decentralized clean energy systems</li>
        <li>Plant-based and lab-grown food alternatives</li>
        <li>Green fintech and ethical investing</li>
        <li>Nature-based climate solutions</li>
        <li>AI-powered climate forecasting</li>
      </ul>

      {/* Closing */}
      <p className="text-justify leading-7 indent-8 text-base mt-6">
        The sustainability movement isn't about perfection — it’s about progress. Whether through personal choices or systemic reforms, every step toward a greener planet counts. The time to act is now, and together, we can build a future that thrives.
      </p>

      {/* Final Image */}
      <img
        src="https://images.unsplash.com/photo-1609332969103-38999fb69b23"
        alt="Green future"
        className="w-full rounded-md shadow-md mt-4"
      />

      {/* Footer/Signature */}
      <p className="mt-8 text-sm text-center text-gray-400">
        Written by <span className="text-[#F5B301]">The EcoFront Team</span>
      </p>
    </div>
  );
};

export default Blog2;
