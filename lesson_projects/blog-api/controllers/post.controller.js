const { response } = require('express');
const PostService = require('../services/post.service'); //import post service here
const { json } = require('body-parser');

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
        const post = PostService.find(slug)
        console.log(post)
        if (!post) {
            return res.status(404).json({ message: `post doesn't exist` })
        }//shows this if post is not found
        res.json(post)//if post is there returns it
    }//to find specific using slug and if the slug(which reps the post) doesnt exist return 404(error code) 

    static delete(req, res) {
        const uuid = req.params.uuid
        const isDeleted = PostService.delete(uuid)
        if (!isDeleted) {
            return res.status(404).json({ message: `post doesnt exist` })
        }
        res.status(204).json()
    }//for post deletion

    static update(req, res) {
        const uuid = req.params.uuid
        const body = req.body

        const updatedPost = PostService.update(uuid, body)
        if (!updatedPost) {
            return res.status(404).json({ message: `post doesn't exist` })
        }
        res.json(updatedPost)
    }
}
//so it takes the req u pass from yur app like postman and takes it thru postservice and adds it to the post array 
module.exports = PostController