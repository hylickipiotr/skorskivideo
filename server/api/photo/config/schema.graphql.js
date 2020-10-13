module.exports = {
  query: `
    photosCountPublished(tagName: String): Int!
  `,
  resolver: {
    Query: {
      photosCountPublished: {
        description: "Return the count of published photos",
        resolverOf: "application::photo.photo.count",
        resolver: async (obj, options, ctx) => {
          return await strapi.api.photo.services.photo.count({
            isPublished: true,
          });
        },
      },
    },
  },
};
