import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("first: " + name, email, subject, text);
    setName("");
    setEmail("");
    setSubject("");
    setText("");
  };
  return (
    <>
      <div className="contact-area fix">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
              <div
                className="contact-address-wrap wow animate__fadeInLeft"
                data-wow-delay=".3s"
              >
                <h2 className="mb-4">Visit Us</h2>
                <p className="m-0">
                  If you have any questions or inquiries, feel free to reach out
                  to us. We're here to help!
                </p>
                <p className="">
                  You can contact us through the following channels:
                </p>
                <h3 className="mb-3 ">Get in Touch</h3>
                <ul className="mb-4">
                  <li>
                    <span>Phone:</span> +8801999999999
                  </li>
                  <li>
                    <span>Email:</span> techvault@gmail.com
                  </li>
                  <li className="mt-4 text-white">
                    <strong>Visit us at our store:</strong>
                  </li>
                  <li>E-9/6, China Town, Naya Paltan, Dhaka-1000</li>
                </ul>

                <h3 className="mb-3">Office Hours</h3>
                <ul className="">
                  <li>
                    <strong>Saturday - Thursday</strong>
                  </li>
                  <li>9:00 AM - 6:30 PM </li>
                  <li className="mt-3">
                    <strong>Friday</strong> - Closed
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="contact-form wow animate__fadeInRight"
                data-wow-delay=".3s"
              >
                <form onSubmit={handleSubmit}>
                  <div className="contact-input-wrap">
                    <label htmlFor="name">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="contact-input-wrap">
                    <label htmlFor="email">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="contact-input-wrap">
                    <label htmlFor="subject">
                      Subject <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Your Subject"
                      className="form-control"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="contact-input-wrap">
                    <label htmlFor="message">
                      Your Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Write message here.."
                    ></textarea>
                  </div>
                  <div className="banner-btn">
                    <button type="submit" className="btn px-4 py-2">
                      Send Your Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" wow animate__zoomIn" data-wow-delay=".6s">
              <iframe
                title="Google Map"
                className="w-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.326444094369!2d90.41273337605789!3d23.73573568933764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85eff2a80b3%3A0xc3e4c1c63ff6150c!2sPaltan%20China%20Town!5e0!3m2!1sen!2sbd!4v1694680557603!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
