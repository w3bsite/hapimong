// routes starting with posts
const Posts = require('../models/posts');
const Author = require('../models/author');
const joi = require('joi');
module.exports = [
    //all Posts
    { method: 'GET', path: '/posts', handler: (req, reply) => { return Posts.find({}).populate('author') } },
    {
        method: 'Post', path: '/posts',
        handler: async (req, reply) => {
            const AuthorId = await Author.findOne({ name: req.payload.authorName });
            const { title, summary, author = AuthorId
            } = req.payload;
            const p = { title: title, summary: summary, author: author };
            const post = new Posts({ title, summary, author });
            var err = post.joiValidate(p);
            if (err) throw err;
            await console.log(AuthorId)
            // const authorId = await author.findOne({ name: author });



            return post.save()
        },
        options: {}

    },
    //single Post
    {
        method: 'GET', path: '/posts/{title}', handler: (req, reply) => {
            return posts.findOne({ title: req.params.title }).populate('author').exec()
        }
    },
];