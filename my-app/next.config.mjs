/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images:{
        remotePatterns:[
            {
                hostname:"image.pexels.com"
            }
        ]
    }
};

export default nextConfig;
