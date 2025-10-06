import React from "react";
import Button from "./Button";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
const Contact = ({ mode, primary }) => {
  return (
    <section
      id="contact"
      className={`py-20 border-t ${
        mode
          ? "bg-white border-t-transparent "
          : "bg-gray-800 text-white border-t-gray-600"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10">
        {/* Left Side: Contact Info */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <h2 className="text-3xl font-bold">Contact Info</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:paldendorjetitung@gmail.com"
              className={`underline`}
              style={{ color: primary }}
            >
              paldendorjetitung@gmail.com
            </a>
          </p>
          <p>
            Phone:
            <a
              href="tel:+977 9768915946"
              className={`underline`}
              style={{ color: primary }}
            >
              +977 9800000000
            </a>
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.instagram.com/paldendorjetitung?igsh=MTltN2U5dHdtOG43eQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={25} style={{ color: "#E4405F" }} />
            </a>

            <a
              href="https://www.facebook.com/palden.dorje.titung."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={25} style={{ color: "#1877F2" }} />
            </a>

            <a
              href="https://github.com/paldentitung"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={25}
                style={{ color: mode ? "#171515" : "#ffffff" }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/palden-dorje-titung-81736b323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={25} style={{ color: "#0A66C2" }} />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
            Send a Message
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className={`w-full px-4 py-2 rounded-md outline-none border ${
                mode ? "bg-white text-gray-800" : "bg-gray-800 text-white"
              }`}
              style={{ borderColor: primary }}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className={`w-full px-4 py-2 rounded-md outline-none border ${
                mode ? "bg-white text-gray-800" : "bg-gray-800 text-white"
              }`}
              style={{ borderColor: primary }}
              required
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className={`w-full px-4 py-2 rounded-md outline-none border ${
                mode ? "bg-white text-gray-800" : "bg-gray-800 text-white"
              }`}
              style={{ borderColor: primary }}
              required
            ></textarea>
            <Button name="Send Message" type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
