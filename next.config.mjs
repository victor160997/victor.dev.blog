/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'bit.ly',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
