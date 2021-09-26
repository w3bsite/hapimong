// routes starting with authors
const authors = require('../models/author');
module.exports = [
    //all authors
    { method: 'GET', path: '/authors', handler: (req, reply) => { return authors.find({}) ? authors.find({}) : 'nothing' } },
    {
        method: 'Post', path: '/authors', handler: (req, reply) => {

            const { name, job, isAdmin } = req.payload;
            const author = new authors({ name, job, isAdmin });
            return author.save()

        }
    },
    //single author
    {
        method: 'GET', path: '/authors/{name}', handler: (req, reply) => {
            return authors.findOne({ title: req.params.name })
        }
    },
];