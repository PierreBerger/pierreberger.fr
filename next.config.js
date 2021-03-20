const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg(
  {
    include: path.resolve(__dirname, 'icons'),
  },
  {
    distDir: 'dist',
    crossOrigin: 'anonymous',
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
  }
);
