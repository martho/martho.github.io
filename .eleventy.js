const htmlmin = require("html-minifier");
const markdownItAttrs = require('@gerhobbelt/markdown-it-attrs');
const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {

    let markdown_o = { html: true };
    eleventyConfig.setLibrary('md', markdownIt(markdown_o).use(markdownItAttrs));

    eleventyConfig.addPassthroughCopy({"README.md": "README.md"});
    eleventyConfig.addPassthroughCopy({"src/_assets": "assets"});

    eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
        
        if( outputPath.endsWith(".html") ) {

          let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true
          });

          return minified;
        }
    
        return content;
    });

    return {
        dir: {
            input: "src/pages",
            output: "dist",
            data: "../_data",
            includes: "../_includes",
            layouts: "../_layouts"
        }
    };
};