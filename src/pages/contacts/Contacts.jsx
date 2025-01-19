import React, { useState } from "react";
import Navigation from "@src/components/navigation/Navigation";
import { Button } from "@src/components/button/Button";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required.";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid mobile number.";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      // Replace with your email sending logic (e.g., Email.js, SMTP, or backend API).
      const response = await fetch("https://your-email-api-endpoint.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        throw new Error("Failed to send the message.");
      }
    } catch (error) {
      setErrors({ submit: "There was an issue sending your message. Please try again later." });
    }
  };

  return (
    <div className="px-4 md:px-[10%] gap-10 font-rubik flex flex-col justify-center items-center h-auto py-6 md:py-[3%]">
      <div className="w-full text-center text-[#FDFDFD]">
        <h1 className="text-2xl md:text-3xl">
          <b>REACH ME OUT</b>
        </h1>
      </div>
      <form
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-[#F5B301] text-xl md:text-2xl">
            <b>SEND ME A MESSAGE</b>
          </h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className={`p-4 border-b-4 ${errors.name ? "border-red-500" : "border-[#F5B301]"}`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className={`p-4 border-b-4 ${errors.email ? "border-red-500" : "border-[#F5B301]"}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Mobile Number"
            className={`p-4 border-b-4 ${errors.phone ? "border-red-500" : "border-[#F5B301]"}`}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            className={`p-4 border-b-4 h-60 md:h-40 ${errors.message ? "border-red-500" : "border-[#F5B301]"}`}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <div className="lg:mx-0 mx-auto">
            <Button variant="solid">Send a Message</Button>
          </div>

          {errors.submit && <p className="text-red-500 text-sm mt-2">{errors.submit}</p>}
          {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
        </div>

        <div className="flex flex-col">
          <p className="text-[#FDFDFD] leading-8 text-base md:text-lg text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque eligendi laboriosam natus dolores, suscipit magni maiores, neque, error similique eius quod tempora repellat laudantium modi autem sapiente! Quas repellat omnis quibusdam dolor ab recusandae, laborum quisquam reiciendis eligendi nesciunt rerum nulla, repudiandae fuga obcaecati sed sequi quidem quam doloribus.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
