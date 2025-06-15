// next.config.js
import path from "path";
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  webpack(config) {
    config.resolve.alias["~"] = path.resolve(process.cwd(), "src");
    return config;
  },
};

export default config;
