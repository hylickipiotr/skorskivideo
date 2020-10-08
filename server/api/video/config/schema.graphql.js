module.exports = {
  query: `
    videosCountPublished(tagName: String): Int!
  `,
  resolver: {
    Query: {
      videosCountPublished: {
        description: "Return the count of published videos",
        resolverOf: "application::video.video.count",
        resolver: async (obj, options, ctx) => {
          const tagFilter = options.tagName
            ? { "tags.name": options.tagName }
            : {};

          return await strapi.api.video.services.video.count({
            isPublished: true,
            ...tagFilter,
          });
        },
      },
    },
  },
};
