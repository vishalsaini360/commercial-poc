/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: "https://backend.dev.helloinsights.in/api/v1/msil/",
    LOCAL_BASE_URL: "http://65.1.124.1:8000/api/v1/",
  }
}

module.exports = nextConfig
