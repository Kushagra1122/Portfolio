export const lightColors = {
    primary: "text-blue-700",
    primaryBg: "bg-blue-600",
    primaryBgLight: "bg-blue-50",
    secondary: "text-gray-700",
    secondaryBg: "bg-gray-100",
    background: "bg-white",
    border: "border-gray-200",
    text: "text-gray-800",
    muted: "text-gray-500",
    accent: "text-blue-600",
    cardBg: "bg-white/90 backdrop-blur-sm",
    cardBorder: "border-gray-200",
    iconBg: "bg-blue-100 text-blue-600",
    button:
        "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white",
    gradientBorder: "from-blue-400 to-purple-500",
    timelineLine: "#e5e7eb",
    schoolIcon: "#0f766e",
    workIcon: "#1e40af",
    socialIcon: "text-gray-600 hover:text-blue-600",
    highlight: "bg-gradient-to-r from-blue-500 to-blue-600",
};

export const darkColors = {
    primary: "text-blue-400",
    primaryBg: "bg-blue-800",
    primaryBgLight: "bg-blue-900/40",
    secondary: "text-gray-200",
    secondaryBg: "bg-gray-800",
    background: "bg-gray-900",
    border: "border-gray-700",
    text: "text-gray-100",
    muted: "text-gray-400",
    accent: "text-blue-400",
    cardBg: "bg-gray-800/90 backdrop-blur-sm",
    cardBorder: "border-gray-700",
    iconBg: "bg-blue-900/40 text-blue-400",
    button:
        "bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white",
    gradientBorder: "from-blue-600 to-purple-600",
    timelineLine: "#2d3748",
    schoolIcon: "#0d9488",
    workIcon: "#3b82f6",
    socialIcon: "text-gray-300 hover:text-blue-400",
    highlight: "bg-gradient-to-r from-blue-600 to-blue-700",
};

export const getThemeColors = (theme) =>
    theme === "light" ? lightColors : darkColors;
