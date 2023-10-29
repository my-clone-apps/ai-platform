/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.openai.com"
            },
            {
                hostname: "oaidalleapiprodscus.blob.core.windows.net"
            },
            {
                hostname: "googleusercontent.com"
            }
        ]
    }
};

module.exports = nextConfig;
