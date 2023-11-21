"use client"
import React, { useState } from "react";
import * as emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Your form submission logic here
    if (submissionStatus !== "success") {
      const { name, email, message } = formData;
      const templateParams = {
        from_name: `${name} - ${email} )`,
        to_name: "Mitesh Tagadiya",
        message: message
      };
      if (name !== "" && email !== "" && message !== "") {
        emailjs
          .send(
            "service_kvhn0jx",
            "template_znzqt4a",
            templateParams,
            "x_YkFgu1Toi1XYsGI"
          )
          .then(
            () => {
              setSubmissionStatus("success");
              setFormData({
                name: "",
                email: "",
                message: ""
              });
              setTimeout(() => {
                setSubmissionStatus(null);
              }, [10000]);
            },
            error => {
              setSubmissionStatus("error");
            }
          );
      } else {
        setSubmissionStatus("error");
        setTimeout(() => {
          setSubmissionStatus(null);
        }, [10000]);
      }
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto">
        <form className="mt-6 mb-10 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              style={{ backgroundColor: "#7b89a8" }}
              className="mt-1 block w-full rounded-md border-transparent shadow-sm focus:border-white focus:ring-white text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              style={{ backgroundColor: "#7b89a8" }}
              className="mt-1 block w-full rounded-md border-transparent shadow-sm focus:border-white focus:ring-white text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Message"
              style={{ backgroundColor: "#7b89a8" }}
              className="mt-1 block w-full rounded-md border-transparent shadow-sm focus:border-white focus:ring-white text-white"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              style={{
                borderColor: "#32c7ff",
                borderWidth: 2,
                color: "#32c7ff",
                fontWeight: 700
              }}
              className="w-full flex justify-center bg-transparent border border-transparent rounded-md py-2 px-4 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {submissionStatus === "success" ? "Sent" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
