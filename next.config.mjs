/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/math',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
