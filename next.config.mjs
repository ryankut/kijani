/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/skincare', destination: '/shop/skincare', permanent: false },
      { source: '/haircare', destination: '/shop/haircare', permanent: false },
      { source: '/babyproducts', destination: '/shop/babyproducts', permanent: false },
      { source: '/shop-all', destination: '/shop', permanent: false },
      { source: '/makeup', destination: '/shop', permanent: false },
      { source: '/fragrance', destination: '/shop', permanent: false },
      { source: '/wellness', destination: '/shop', permanent: false },
      { source: '/sets', destination: '/shop', permanent: false },
      { source: '/categories/:slug', destination: '/shop', permanent: false },
      { source: '/products/:path*', destination: '/shop', permanent: false },
      { source: '/product/:id(\\d+)', destination: '/shop', permanent: false },
    ];
  },
};

export default nextConfig;
