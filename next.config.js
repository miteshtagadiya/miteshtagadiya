module.exports = {
  output: "export", // comment this line while development
  assetPrefix: "/",
  exportTrailingSlash: true, // comment this line while development
  basePath: "",
  // trailingSlash: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/",
        permanent: true
      }
    ];
  }
};
