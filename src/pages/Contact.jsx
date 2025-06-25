import React from "react";
import { motion } from "framer-motion";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsEnvelope,
  BsGeoAlt,
  BsClock,
} from "react-icons/bs";
import { useTheme } from "../context/Theme";

const Contact = () => {
  const [theme] = useTheme();
  const isLight = theme === "light";

  return (
    <section
      id="contact"
      className={`py-28 px-6 transition-colors duration-300 ${
        isLight ? "bg-white text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-blue-600">Connect</span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isLight ? "text-gray-600" : "text-gray-400"
            }`}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to collaborate.
          </p>
        </motion.div>

        <motion.div
          className={`rounded-2xl p-8 md:p-12 shadow-lg ${
            isLight ? "bg-gray-50" : "bg-gray-800"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-lg ${
                    isLight
                      ? "bg-blue-100 text-blue-600"
                      : "bg-blue-900/50 text-blue-400"
                  }`}
                >
                  <BsEnvelope size={20} />
                </div>
                <div>
                  <h4
                    className={`text-sm font-medium uppercase tracking-widest mb-1 ${
                      isLight ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    Email
                  </h4>
                  <a
                    href="mailto:kushagra.tiwari@example.com"
                    className="text-lg font-medium text-blue-600 hover:underline"
                  >
                    kushagratiwari24@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-lg ${
                    isLight
                      ? "bg-blue-100 text-blue-600"
                      : "bg-blue-900/50 text-blue-400"
                  }`}
                >
                  <BsGeoAlt size={20} />
                </div>
                <div>
                  <h4
                    className={`text-sm font-medium uppercase tracking-widest mb-1 ${
                      isLight ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    Location
                  </h4>
                  <p className="text-lg">Surathkal, Karnataka, India</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-lg ${
                    isLight
                      ? "bg-blue-100 text-blue-600"
                      : "bg-blue-900/50 text-blue-400"
                  }`}
                >
                  <BsClock size={20} />
                </div>
                <div>
                  <h4
                    className={`text-sm font-medium uppercase tracking-widest mb-1 ${
                      isLight ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    Availability
                  </h4>
                  <p className="text-lg">
                    Open to freelance and full-time opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col justify-center">
              <h4
                className={`text-sm font-medium uppercase tracking-widest mb-6 ${
                  isLight ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Connect With Me
              </h4>
              <div className="flex space-x-6">
                {[
                  {
                    icon: BsGithub,
                    url: "https://github.com/Kushagra1122",
                    color: isLight ? "hover:text-gray-900" : "hover:text-white",
                  },
                  {
                    icon: BsLinkedin,
                    url: "https://linkedin.com/in/kushagra-tiwari-aa2354283",
                    color: "hover:text-blue-600",
                  },
                  {
                    icon: BsInstagram,
                    url: "https://instagram.com/_kushagra__23",
                    color: "hover:text-pink-600",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-3xl transition-colors ${
                      isLight ? "text-gray-600" : "text-gray-400"
                    } ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    aria-label={social.icon}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
