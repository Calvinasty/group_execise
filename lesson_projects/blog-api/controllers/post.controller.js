const PostService = require('../services/post.service') //import post service here

class PostController {
    static store(req, res) {
        const body = req.body; // retrieve request body / data
        const post = PostService.store(body); //call post service
        res.status(201).json(post)
    }
}

module.exports = PostController