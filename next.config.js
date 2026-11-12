/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The stylesheet is ~8 KB: inlined it costs less than the render-blocking
  // request PageSpeed flagged on slow mobile connections.
  experimental: { inlineCss: true },
  // This app is a self-contained project inside a larger repo; pin the trace
  // root to its own folder so Next doesn't pick the repo-root lockfile.
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

module.exports = nextConfig;
