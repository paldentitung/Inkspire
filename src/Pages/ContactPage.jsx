import React, { useContext } from "react";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { ModeContext } from "../Context/ModeContext";
const ContactPage = () => {
  const { mode } = useContext(ModeContext);
  return (
    <div className="flex flex-col space-y-10 mt-10">
      <p
        className={`text-center mb-10 text-lg ${
          mode ? "text-gray-700" : "text-gray-300"
        }`}
      >
        I’m always happy to connect! Whether it’s a project, collaboration, or
        just a chat about tech, feel free to reach out.
      </p>

      <Contact mode={mode} />

      <div
        className={`w-full max-w-6xl border-t flex flex-col mx-auto text-center 
     ${
       mode
         ? "bg-white border-t-transparent "
         : "bg-gray-800 text-white border-t-gray-600"
     }
        
        `}
      >
        <p className={`mt-6  ${mode ? "text-gray-700" : "text-gray-300"}`}>
          📍 Based in Nepal • Open for remote collaborations worldwide
        </p>
        <div className="mt-6 w-full h-64 md:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.277768685635!2d85.28493324095915!3d27.709030241454187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1759849418313!5m2!1sen!2snp"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kathmandu Location"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
