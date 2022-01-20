module.exports = {
  async headers() {
    return [
      {
        source: '/_next/:path*',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ];
  },
};
