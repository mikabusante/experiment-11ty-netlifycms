module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/components");

  eleventyConfig.addWatchTarget("./src/components/");

  eleventyConfig.addShortcode("loop", function (modules) {
    console.log("from function", modules);
  });

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
