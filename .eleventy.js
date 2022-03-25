const eleventyVue = require("@11ty/eleventy-plugin-vue");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyVue);

  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/components");

  eleventyConfig.addWatchTarget("./src/components/");

  eleventyConfig.addTransform("add-html-doctype", (content, outputPath) => {
    let doctype = "<!doctype html>";
    // If we’re writing to an HTML file and a Doctype does not already exist
    if (
      outputPath.endsWith(".html") &&
      !content.trim().toLowerCase().startsWith(doctype)
    ) {
      return `${doctype}${content}`;
    }
    return content;
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
