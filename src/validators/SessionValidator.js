const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  store: celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required()
    })
  })
};
