const { response } = require('express');
const PostService = require('../services/post.service') //import post service here

class PostController {
    static store(req, res) {
        const body = req.body; // retrieve request body / data
        const post = PostService.store(body); //call post service
        res.status(201).json(post)
    }

    static findAll(req, res) {
        const posts = PostService.findAll()
        res.json(posts)
    }//finds all post and sends a response in a form of json

    static find(req, res) {
        const slug = req.params.slug
        const post = PostService.find()
        if (post === null) {
            res.status(404).json({ message: `post not found` })
        }
    }//to find specific using slug and if the slug(which reps the post) doesnt exist return 404(error code) 

}
//so it takes the req u pass from yur app like postman and takes it thru postservice and adds it to the post array 
module.exports = PostController