module.exports = {
  publicPath: "",
  css: {
    extract: false,
  },
  devServer: {
    disableHostCheck: true,
  },
  configureWebpack: {
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("url-loader")
      .loader("url-loader")
      .end()
      .use("svgo-loader")
      .loader("svgo-loader")
      .options({ plugins: [{ removeViewBox: false }] })
      .end();
  },
};
