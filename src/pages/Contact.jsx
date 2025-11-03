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
import { getThemeColors } from "../utils/colors";

const Contact = () => {
  const [theme] = useTheme();
  const themeColors = getThemeColors(theme);

  return (
    <section
      className={`min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${themeColors.background}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Let's{" "}
            <span
              className={`${themeColors.accent} font-extrabold bg-clip-text bg-gradient-to-r ${themeColors.gradientBorder}`}
            >
              Connect
            </span>
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto ${themeColors.muted} px-2 sm:px-0`}
          >
            Open to new roles, collaborations, or a quick chat.
          </p>
        </motion.div>

        <motion.div
          className={`rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg md:shadow-xl ${themeColors.cardBg} ${themeColors.cardBorder} border relative overflow-hidden`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
            <div className="space-y-6 md:space-y-8 flex-1">
              {[
                {
                  Icon: BsEnvelope,
                  label: "Email",
                  value: (
                    <a
                      href="mailto:kushagratiwari24@gmail.com"
                      className={`text-base sm:text-lg font-medium ${themeColors.accent} hover:underline break-all`}
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
                  value: "Open to freelance and full‑time roles",
                },
              ].map(({ Icon, label, value }, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start space-x-3 sm:space-x-4"
                  whileHover={{ x: 5 }}
                >
                  <div
                    className={`p-2 sm:p-3 rounded-lg ${themeColors.iconBg} shadow-sm`}
                  >
                    <Icon className="text-sm sm:text-base" />
                  </div>
                  <div>
                    <h4
                      className={`text-xs font-semibold uppercase tracking-widest mb-1 ${themeColors.muted}`}
                    >
                      {label}
                    </h4>
                    <p className={`text-sm sm:text-md ${themeColors.text}`}>
                      {value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex-1 flex flex-col items-center lg:items-start justify-center mt-4 lg:mt-0">
              <h4
                className={`text-sm font-semibold uppercase tracking-widest mb-4 sm:mb-6 ${themeColors.muted}`}
              >
                Connect With Me
              </h4>
              <div className="flex gap-4 sm:gap-6 flex-wrap justify-center lg:justify-start">
                {[
                  {
                    icon: BsGithub,
                    url: "https://github.com/Kushagra1122",
                    label: "GitHub",
                  },
                  {
                    icon: BsLinkedin,
                    url: "https://linkedin.com/in/kushagra-tiwari-aa2354283",
                    label: "LinkedIn",
                  },
                  {
                    icon: BsInstagram,
                    url: "https://instagram.com/kushagra_._23_",
                    label: "Instagram",
                  },
                ].map(({ icon: Icon, url, label }, idx) => (
                  <motion.a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`text-2xl sm:text-3xl transition-colors ${themeColors.socialIcon}`}
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
