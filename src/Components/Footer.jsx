import React, { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";
import { ThemeContext } from "../Context/ThemeContext";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const { mode } = useContext(ModeContext);
  const { colors } = useContext(ThemeContext);
  const { primary } = colors;

  return (
    <footer
      className={`py-6 text-center border-t ${
        mode
          ? "bg-white border-t-gray-200 text-gray-800"
          : "bg-gray-800 border-t-gray-600 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-2">
        <p>© 2025 Palden. All rights reserved.</p>
        <p style={{ color: primary }}>Follow me on socials!</p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://www.instagram.com/paldendorjetitung"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} style={{ color: "#E4405F" }} />{" "}
          </a>
          <a
            href="https://www.facebook.com/palden.dorje.titung."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={20} style={{ color: "#1877F2" }} />{" "}
          </a>
          <a
            href="https://github.com/paldentitung"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={20}
              style={{ color: mode ? "#171515" : "#E0E0E0" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/palden-dorje-titung-81736b323"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} style={{ color: "#0077B5" }} />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
