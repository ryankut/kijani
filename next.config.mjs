/** @type {import('next').NextConfig} */
   const nextConfig = {
     experimental: {
       serverActions: { bodySizeLimit: '6mb' },
     },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
