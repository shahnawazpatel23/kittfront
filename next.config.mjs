/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Ignore ESLint errors during the build
        ignoreDuringBuilds: true,
      },
      experimental: {
        missingSuspenseWithCSRBailout: false,
      },
};

export default nextConfig;
