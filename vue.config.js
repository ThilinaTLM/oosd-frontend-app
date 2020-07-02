module.exports = {
    devServer: {
        proxy: "http://localhost:8080/"
    },
    transpileDependencies: ["vuetify"],
    pages: {
      index: {
          entry: "./src/pages/index/main.ts",
          template: "public/index.html",
          filename: "index.html",
          title: "Galle District Secretariat Office",
          chunks: ["chunk-vendors", "chunk-common", "index"]
      },
      cms: {
          entry: "./src/pages/cms/main.ts",
          template: "public/index.html",
          filename: "cms.html",
          title: "Complaint Manager",
          chunks: ["chunk-vendors", "chunk-common", "cms"]
      }
  },
  
};
