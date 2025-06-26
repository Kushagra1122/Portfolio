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
      className={`py-20 px-4 sm:px-6 md:px-10 transition-colors duration-500 ${themeColors.bg}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
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
            className={`text-base md:text-lg max-w-2xl mx-auto ${themeColors.secondaryText}`}
          >
            I'm always open to new opportunities, collaborations, or just a
            friendly chat.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          className={`rounded-2xl p-6 sm:p-10 shadow-xl ${themeColors.cardBg} ${themeColors.cardBorder} border`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Column: Info */}
            <div className="space-y-8 flex-1">
              {[
                {
                  Icon: BsEnvelope,
                  label: "Email",
                  value: (
                    <a
                      href="mailto:kushagratiwari24@gmail.com"
                      className={`text-lg font-medium ${themeColors.accent} hover:underline`}
                    >
                      kushagratiwari24@gmail.com
                    </a>
                  ),
                },
                {
                  Icon: BsGeoAlt,
                  label: "Location",
                  value: "Surathkal, Karnataka, India",
                },
                {
                  Icon: BsClock,
                  label: "Availability",
                  value: "Open to freelance and full-time opportunities",
                },
              ].map(({ Icon, label, value }, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                >
                  <div
                    className={`p-3 rounded-lg ${themeColors.iconBg} shadow-sm`}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4
                      className={`text-xs font-semibold uppercase tracking-widest mb-1 ${themeColors.secondaryText}`}
                    >
                      {label}
                    </h4>
                    <p className={`text-md ${themeColors.text}`}>{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Socials */}
            <div className="flex-1 flex flex-col items-center md:items-start justify-center">
              <h4
                className={`text-sm font-semibold uppercase tracking-widest mb-6 ${themeColors.secondaryText}`}
              >
                Connect With Me
              </h4>
              <div className="flex gap-6 flex-wrap justify-center md:justify-start">
                {[
                  {
                    icon: BsGithub,
                    url: "https://github.com/Kushagra1122",
                    label: "GitHub",
                    color: isLight ? "hover:text-black" : "hover:text-white",
                  },
                  {
                    icon: BsLinkedin,
                    url: "https://linkedin.com/in/kushagra-tiwari-aa2354283",
                    label: "LinkedIn",
                    color: "hover:text-blue-600",
                  },
                  {
                    icon: BsInstagram,
                    url: "https://instagram.com/_kushagra__23",
                    label: "Instagram",
                    color: "hover:text-pink-600",
                  },
                ].map(({ icon: Icon, url, label, color }, idx) => (
                  <motion.a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`text-3xl transition-colors ${
                      isLight ? "text-gray-600" : "text-gray-400"
                    } ${color}`}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon />
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
