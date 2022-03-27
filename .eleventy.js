module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/admin");

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
    },
    htmlTemplateEngine: "liquid",
  };
};
