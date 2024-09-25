module.exports = {
    siteUrl: 'https://guildlb.com',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml'], // <= exclude here
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://guildlb.com/server-sitemap.xml', // <==== Add here
        ],
    },
};
