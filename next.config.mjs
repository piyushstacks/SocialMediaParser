/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        // Ensure selenium-webdriver is bundled only for server-side
        config.externals = [
          ...config.externals,
          'selenium-webdriver',
          'chromedriver'
        ];
      }
      return config;
    },
  };



export default nextConfig;
