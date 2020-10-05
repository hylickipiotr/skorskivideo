const { sanitizeEntity } = require("strapi-utils");

const filterQuery = async (ctx, entityName, filter) => {
  let entities;

  ctx.query = {
    ...ctx.query,
    ...filter,
  };

  if (ctx.query._q) {
    entities = await strapi.services[entityName].search(ctx.query);
  } else {
    entities = await strapi.services[entityName].find(ctx.query);
  }

  return entities.map((entity) =>
    sanitizeEntity(entity, { model: strapi.models[entityName] })
  );
};

module.exports = {
  filterQuery,
};
