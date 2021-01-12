const eleventyXMLPlugin = require('eleventy-xml-plugin');

const pluginRss = require("@11ty/eleventy-plugin-rss");

const stripHtml = require("string-strip-html");
const HtmlEntities = require('html-entities');
const htmlEncoder = new HtmlEntities.AllHtmlEntities();

module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getFilteredByGlob("posts/**/*.*").reverse();
  });

  // RSS/XML Configuration
  eleventyConfig.addPlugin(eleventyXMLPlugin);

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addNunjucksFilter("rssItemTitle", htmlString => {
    return htmlEncoder.decode(htmlString);
  });

  eleventyConfig.addNunjucksFilter("rssItemDescription", htmlString => {
    return htmlEncoder.decode(stripHtml(htmlString)).replace(/(\r\n|\n|\r)/gm, '').substring(0, 250);
  });

  eleventyConfig.addNunjucksFilter("rssPubDate", collection => {
    if (!collection || !collection.length || collection.length == 0) {
      // throw new Error("Collection is empty in rssPubDate filter.");
      return false;
    }

    // Newest date in the collection
    return collection[collection.length - 1].date.toUTCString();
  });

  const templates = ["html", "md", "xml", "njk"]

  eleventyConfig.setTemplateFormats(templates);
  eleventyConfig.addPassthroughCopy("static") // copy all static files but do not render them
  eleventyConfig.addPassthroughCopy("CNAME") // copy the CNAME file for custom hosting 
  eleventyConfig.addPassthroughCopy(".htaccess") // copy the CNAME file for custom hosting 
};
