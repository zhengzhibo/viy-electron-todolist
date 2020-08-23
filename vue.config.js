module.exports = {
  runtimeCompiler: true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      externals: ['nedb-promises'],
    },
  },
};
