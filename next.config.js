/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  webpack : (config, options) => {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    console.log("run webpack config in next . config");
    
    config.module.rules.unshift(
      // Reapply the existing rule, but only for svg imports ending in ?url
      // {
      //   ...fileLoaderRule,
      //   test: /\.svg$/i,
      //   resourceQuery: /url/, // *.svg?url
      // },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    )

    console.log("edited rules");
    console.log(config.module.rules);

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}
