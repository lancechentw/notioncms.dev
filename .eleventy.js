require("dotenv").config();
const EleventyNotionCMSPlugin = require("eleventy-plugin-notion-cms");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyNotionCMSPlugin, {
    notionToken: process.env.NOTION_TOKEN,
    pages: { indexPage: { id: "1e1420f1b2994070bdec65bc7c838fde" } },
    databases: {
      articleDatabase: {
        id: "10b45c7b7eac44bb8d7fd8bb12deb998",
      },
    },
  });
};
