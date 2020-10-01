module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getFilteredByGlob("posts/**/*.*").reverse();
  });

  const templates = ["html", "md"]

  eleventyConfig.setTemplateFormats(templates);
  eleventyConfig.addPassthroughCopy("static") // copy all static files but do not render them
};
