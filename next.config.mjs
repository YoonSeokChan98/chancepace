/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true, // styled-components SSR 활성화
    },
};

export default nextConfig;
