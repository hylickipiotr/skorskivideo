"use strict";

const { filterQuery } = require("../../../utils/filterQuery");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  find: (ctx) =>
    filterQuery(ctx, "social", {
      isPublished: true,
    }),
};
