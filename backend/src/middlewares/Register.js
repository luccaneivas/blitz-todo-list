const Joi = require('joi');
const { BadRequestError } = require('restify-errors');

const registerSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

function registerMiddleware(request, _response, next) {
  const { error } = registerSchema.validate(request.body);

  if (error) {
    next(new BadRequestError(error.message));
  }

  next();
}

module.exports = registerMiddleware;
