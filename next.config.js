// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    output: 'export',
    trailingSlash: true,
    basePath: isProd ? '/Elbow_Grease' : '',
    assetPrefix: isProd ? '/Elbow_Grease/' : '',
    images: { unoptimized: true },
};
