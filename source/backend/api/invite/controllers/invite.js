"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  findInvite: async (ctx) => {
    const { id } = ctx.params;

    const entity = await strapi.services.invite.search({ Invite: id });
    return sanitizeEntity(entity, { model: strapi.models.invite });
  },
};
