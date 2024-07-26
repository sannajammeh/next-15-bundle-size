import NextBundleAnalyzer from "@next/bundle-analyzer";

const withAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  /* config options here */
};

export default withAnalyzer(nextConfig);
