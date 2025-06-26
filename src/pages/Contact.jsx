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

  const colors = {
    light: {
      bg: "bg-gradient-to-b from-white to-gray-50",
      text: "text-gray-900",
      secondaryText: "text-gray-600",
      accent: "text-blue-600",
      cardBg: "bg-white/90 backdrop-blur-sm",
      cardBorder: "border-gray-200",
      iconBg: "bg-blue-100 text-blue-600",
      button:
        "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white",
      gradientBorder: "from-blue-400 to-purple-500",
    },
    dark: {
      bg: "bg-gradient-to-b from-gray-900 to-gray-800",
      text: "text-white",
      secondaryText: "text-gray-400",
      accent: "text-blue-400",
      cardBg: "bg-gray-800/90 backdrop-blur-sm",
      cardBorder: "border-gray-700",
      iconBg: "bg-blue-900/50 text-blue-400",
      button:
        "bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white",
      gradientBorder: "from-blue-600 to-purple-700",
    },
  };

  const themeColors = colors[theme];

  return (
    <section
      id="contact"
      className={`py-24 px-6 transition-colors duration-500 ${themeColors.bg}`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's{" "}
            <span
              className={`${themeColors.accent} font-extrabold bg-clip-text bg-gradient-to-r ${themeColors.gradientBorder}`}
            >
              Connect
            </span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${themeColors.secondaryText}`}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to collaborate.
          </p>
        </motion.div>

        <motion.div
          className={`rounded-2xl p-8 md:p-12 shadow-xl ${themeColors.cardBg} ${themeColors.cardBorder} border`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Email */}
              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
              >
                <div
                  className={`p-3 rounded-lg ${themeColors.iconBg} shadow-sm`}
                >
                  <BsEnvelope size={20} />
                </div>
                <div>
                  <h4
                    className={`text-sm font-medium uppercase tracking-widest mb-1 ${themeColors.secondaryText}`}
                  >
                    Email
                  </h4>
                  <a
                    href="mailto:kushagra.tiwari@example.com"
                    className={`text-lg font-medium ${themeColors.accent} hover:underline`}
                  >
                    kushagratiwari24@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
              >
                <div
                  className={`p-3 rounded-lg ${themeColors.iconBg} shadow-sm`}
                >
                  <BsGeoAlt size={20} />
                </div>
                <div>
                  <h4
                    className={`text-sm font-medium uppercase tracking-widest mb-1 ${themeColors.secondaryText}`}
                  >
                    Location
                  </h4>
                  <p className={`text-lg ${themeColors.text}`}>
                    Surathkal, Karnataka, India
                  </p>
                </div>
              </motion.div>

              {/* Availability */}
              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
              >
                <div
                  className={`p-3 rounded-lg ${themeColors.iconBg} shadow-sm`}
                >
                  <BsClock size={20} />
                </div>
                <div>
                  <h4
                    className={`text-sm font-medium uppercase tracking-widest mb-1 ${themeColors.secondaryText}`}
                  >
                    Availability
                  </h4>
                  <p className={`text-lg ${themeColors.text}`}>
                    Open to freelance and full-time opportunities
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col justify-center">
              <h4
                className={`text-sm font-medium uppercase tracking-widest mb-6 ${themeColors.secondaryText}`}
              >
                Connect With Me
              </h4>
              <div className="flex space-x-6">
                {[
                  {
                    icon: BsGithub,
                    url: "https://github.com/Kushagra1122",
                    color: isLight ? "hover:text-gray-900" : "hover:text-white",
                    label: "GitHub",
                  },
                  {
                    icon: BsLinkedin,
                    url: "https://linkedin.com/in/kushagra-tiwari-aa2354283",
                    color: "hover:text-blue-600",
                    label: "LinkedIn",
                  },
                  {
                    icon: BsInstagram,
                    url: "https://instagram.com/_kushagra__23",
                    color: "hover:text-pink-600",
                    label: "Instagram",
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
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
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
