import React, { useState } from "react";
import Navigation from "@src/components/navigation/Navigation";
import { Button } from "@src/components/button/Button";
import Facebook from "@src/assets/Facebook.png";
import Instagram from "@src/assets/Instagram.png";
import LinkedIn from "@src/assets/LinkedIn.png";
import Github from "@src/assets/GitHub.png";

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
      setErrors({
        submit: "There was an issue sending your message. Please try again later.",
      });
    }
  };

  return (
    <div className="px-6 md:px-20 py-24 font-rubik text-white">
      <div className="text-center my-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-[#F5B301]">
          REACH ME OUT
        </h1>
        <p className="text-gray-300 text-base md:text-lg mt-4 max-w-3xl mx-auto">
          Let's connect! Whether you have a question, a collaboration opportunity,
          or just want to say hi—I'm excited to hear from you. Fill out the form below
          and I’ll get back to you as soon as I can.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-12 bg-[#2A2E34] p-8 rounded-2xl shadow-xl"
      >
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-[#F5B301]">SEND ME A MESSAGE</h2>

          {["name", "email", "phone"].map((field) => (
            <div key={field} className="flex flex-col">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                placeholder={
                  field === "name"
                    ? "Full Name"
                    : field === "email"
                    ? "Email"
                    : "Mobile Number"
                }
                className={`p-3 rounded-md bg-[#3B4046] border-2 ${
                  errors[field] ? "border-red-500" : "border-[#F5B301]"
                } focus:outline-none focus:ring-2 focus:ring-[#F5B301] transition-all`}
              />
              {errors[field] && (
                <p className="text-red-400 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <div className="flex flex-col">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className={`p-3 h-32 rounded-md bg-[#3B4046] border-2 ${
                errors.message ? "border-red-500" : "border-[#F5B301]"
              } focus:outline-none focus:ring-2 focus:ring-[#F5B301] transition-all resize-none`}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <div className="pt-2">
            <Button variant="solid" className="w-full">
              Send Message
            </Button>
            {errors.submit && (
              <p className="text-red-400 text-sm mt-3">{errors.submit}</p>
            )}
            {successMessage && (
              <p className="text-green-400 text-sm mt-3">{successMessage}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-between text-justify text-base leading-relaxed text-gray-200 gap-6">
          <div className="pt-16">
            <p>
              I'm always open to connecting with passionate individuals and creative minds.
              Whether you're starting a new project, need a developer for hire, or just
              looking for some advice—feel free to drop me a message.
            </p>
            <p className="mt-4">
              I typically respond within 24–48 hours, so hang tight and let’s make
              something awesome together.
            </p>
          </div>

          {/* Socials Section */}
          <div className="mt-4">
            <h4 className="text-[#F5B301] font-semibold mb-2">You can also find me here:</h4>
            <div className="flex flex-row gap-4 mt-2">
              <a
                href="https://www.instagram.com/jamaaaaaaaaaaaak/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={Instagram} alt="Instagram" className="w-10 h-10" />
              </a>
              <a
                href="https://www.facebook.com/johnmark.pacaldoperoche/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={Facebook} alt="Facebook" className="w-10 h-10" />
              </a>
              <a
                href="https://github.com/Java-rice"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={Github} alt="GitHub" className="w-10 h-10" />
              </a>
              <a
                href="https://www.linkedin.com/in/john-mark-peroche-61a756229/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={LinkedIn} alt="LinkedIn" className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
