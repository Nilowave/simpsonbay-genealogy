const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async index(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.invite.findOne({ Invite: id });
    return sanitizeEntity(entity, { model: strapi.models.invite });
  },
};
