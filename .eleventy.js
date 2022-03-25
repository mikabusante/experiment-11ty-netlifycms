module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.setBrowserSyncConfig({
    files: ["./dist/**/*.css", "./dist/**/*.js"],
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
    },
    htmlTemplateEngine: "liquid",
  };
};
