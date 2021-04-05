module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Tv Shows App";
      return args;
    });
  },
};
