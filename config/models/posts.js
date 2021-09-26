const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;
const Author = require('./author')

const PostsSchema = new Schema(
    {
        title: { type: String, unique: true, required: true },
        author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
        summary: { type: String },
    }
);

PostsSchema.methods.joiValidate = function (obj) {

    var schema = Joi.object({
        title: Joi.types.String().min(6).max(30).required(),
        summary: Joi.types.String().min(6).max(300),
        author: Joi.types.String().min(6).max(30),

    })
    return schema.validate(obj);
}
// Virtual for book's URL
PostsSchema
    .virtual('url')
    .get(function () {
        return '/posts/' + this.title;
    });
module.exports = mongoose.model('Posts', PostsSchema)