/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import contactImg from "../../assets/contact-img.svg";
import './Contact.css'

const EmailForm = () => {
  const [fname, fsetName] = useState("");
  const [lname, lsetName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!fname) errors.fname = "First name is required";
    if (!lname) errors.lname = "Last name is required";
    if (!email) errors.email = "Email is required";
    if (!number) errors.number = "Mobile number is required";
    if (!message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_p0ibenf";
    const templateId = "template_w4jlawt";
    const publicKey = "0RvzbREEtgEPIaNgi";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: fname + " " + lname,
      from_email: email,
      from_number: number,
      to_name: "Mridul Gupta",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        fsetName("");
        lsetName("");
        setEmail("");
        setNumber("");
        setMessage("");
        setErrors({});
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
  <div className='bg-gradient-to-r from-purple-500 to-pink-500'>

    <h2 className='text-white text-center font-bold text-[3rem] font-serif py-[2rem]'>Let's Connect</h2>

    <div className="overflow-hidden  flex flex-col gap-[2rem] md:gap-[1rem] md:flex-row justify-center items-center py-[4rem] px-[2rem]" id='contact'>
      <img src={contactImg} alt="" className="w-[100%] md:w-[40%] bounce-animation" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-[100%] md:w-[60%]"
      >
        <div className="flex flex-col md:flex-row items-center gap-[10px] w-full">
          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={(e) => fsetName(e.target.value)}
              className="placeholder:text-white bg-transparent rounded-[20px] py-[1.5rem] px-[1rem] xl:px-[3rem] text-white border-2 border-solid border-gray-600 placeholder:opacity-[0.7]"
            />
            {errors.fname && <span className="text-gray-200">{errors.fname}</span>}
          </div>
          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Last Name"
              value={lname}
              onChange={(e) => lsetName(e.target.value)}
              className="placeholder:text-white bg-transparent rounded-[20px] py-[1.5rem] px-[1rem] xl:px-[3rem] text-white border-2 border-solid border-gray-600 placeholder:opacity-[0.7]"
            />
            {errors.lname && <span className="text-gray-200">{errors.lname}</span>}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-[10px] my-[1rem] w-full">
          <div className="flex flex-col w-full">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="placeholder:text-white bg-transparent rounded-[20px] py-[1.5rem] px-[1rem] xl:px-[3rem] text-white border-2 border-solid border-gray-600 placeholder:opacity-[0.7]"
            />
            {errors.email && <span className="text-gray-200">{errors.email}</span>}
          </div>
          <div className="flex flex-col w-full">
            <input
              type="number"
              placeholder="Mobile Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="placeholder:text-white bg-transparent rounded-[20px] py-[1.5rem] px-[1rem] xl:px-[3rem] text-white border-2 border-solid border-gray-600 placeholder:opacity-[0.7]"
            />
            {errors.number && <span className="text-gray-200">{errors.number}</span>}
          </div>
        </div>

        <div className="flex flex-col w-full">
          <textarea
            className="placeholder:text-white placeholder:opacity-[0.7] bg-transparent rounded-[20px] py-[1.5rem] px-[1rem] xl:px-[3rem] text-white border-2 border-solid border-gray-600"
            placeholder="Message"
            cols="50"
            rows="7"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && <span className="text-gray-200">{errors.message}</span>}
        </div>

        <button type="submit" className="bg-white mt-[2rem] rounded-[10px] font-serif font-bold py-[1rem] px-[2rem]">
          Send
        </button>
      </form>
    </div>
  </div>
  );
};

export default EmailForm;
