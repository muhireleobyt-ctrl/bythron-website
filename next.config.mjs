/** @type {import('next').NextConfig} */
const nextConfig = {
  // react-leaflet's MapContainer initializes its Leaflet instance via a one-time
  // ref guard that isn't compatible with Strict Mode's dev-only double effect
  // invocation ("Map container is already initialized"). Strict Mode's extra
  // checks are dev-only and don't affect the production build either way.
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "recharts"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
