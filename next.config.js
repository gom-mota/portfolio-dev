/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        disableStaticImages: true,
    },
    compiler: {
        styledComponents: true,
    },
};

module.exports = nextConfig;
