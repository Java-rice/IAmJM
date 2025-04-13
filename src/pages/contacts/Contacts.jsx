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
    <div className="px-6 md:px-20 py-10 font-rubik text-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-[#F5B301]">
          REACH ME OUT
        </h1>
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

        <div className="flex flex-col justify-center text-justify text-lg leading-relaxed text-gray-200">
          <p>
            I'm always open to discuss your next big idea or answer any questions you may have.
            Drop me a line and let's get the conversation started. Whether it's a project, a partnership, or just a friendly hello—I'd love to hear from you!
          </p>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
