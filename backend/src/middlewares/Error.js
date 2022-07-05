const { InternalServerError } = require('restify-errors');

function checkError(error) {
  if (!error.statusCode) {
    console.log(error.message);
    
    return new InternalServerError('An unexpected error ocurred.');
  }

  return error;
}

function handleError(error, _request, response, _next) {
  const { statusCode, message } = checkError(error);

  return response.status(statusCode).json({ message });
}

module.exports = handleError;
