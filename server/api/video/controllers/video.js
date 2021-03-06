"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  find: async (ctx) => {
    let entities;

    ctx.query = {
      ...ctx.query,
      _sort: "created_at:DESC",
    };

    if (ctx.query._q) {
      entities = await strapi.services.video.search(ctx.query);
    } else {
      entities = await strapi.services.video.find(ctx.query);
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.video })
    );
  },
};
