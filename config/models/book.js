const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
    summary: { type: String, required: true },
    isbn: { type: String, required: true },
    genre: [{ type: Schema.Types.ObjectId, ref: 'Genre' }]
  }
);
userSchema.methods.joiValidate = function (obj) {
  var Joi = require('joi');
  var schema = {
    username: Joi.types.String().min(6).max(30).required(),
    password: Joi.types.String().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/).required(),
    email: Joi.types.String().email().required(),
    first_name: Joi.types.String().required(),
    last_name: Joi.types.String().required(),
    created: Joi.types.Date(),
  }
  return Joi.validate(obj, schema);
}

// Virtual for book's URL
BookSchema
  .virtual('url')
  .get(function () {
    return '/catalog/book/' + this._id;
  });

//Export model
module.exports = mongoose.model('Book', BookSchema);
