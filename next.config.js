// next.config.js
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    // only turn on static‐export in production
    ...(isProd
        ? {
            output: 'export',
            trailingSlash: true,
            images: { unoptimized: true },
            // if you host at /Elbow_Grease_Website, uncomment:
            // basePath: '/Elbow_Grease_Website',
        }
        : {}),
};
