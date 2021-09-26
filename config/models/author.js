var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    name: { type: String, maxLength: 100 },
    job: { type: String },
    isAdmin: { type: Boolean }
  }
);

// Virtual for author's URL
AuthorSchema
  .virtual('url')
  .get(function () {
    return '/authors/' + this.name;
  });

//Export model
module.exports = mongoose.model('Author', AuthorSchema);

