module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/components");

  eleventyConfig.addWatchTarget("./src/components/");

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      layouts: "_layouts",
    },
    htmlTemplateEngine: "liquid",
  };
};
