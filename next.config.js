// next.config.js
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    // only in production exports do we use these
    ...(isProd && {
        output: 'export',
        trailingSlash: true,
        basePath: '/Elbow_Grease',
        assetPrefix: '/Elbow_Grease/',
        images: { unoptimized: true },
    }),

    // In dev mode we want plain localhost paths, so no basePath/assetPrefix
};
