const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/go/gen-z",
        destination: "https://gen-z-showcase--javiertanaxcruz.replit.app/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
