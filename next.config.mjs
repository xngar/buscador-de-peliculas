/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org', // sin 'https://'
                port: '',
                pathname: '/**', // acepta cualquier ruta
            },
        ],
    },
};

export default nextConfig;

