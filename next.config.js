/** @type {import('next').NextConfig} */
const nextConfigWithNextra = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./src/theme.config.jsx",
})

module.exports = nextConfigWithNextra({
    i18n: {
        locales: ["ja","en"],
        defaultLocale: "ja"
    }
})
