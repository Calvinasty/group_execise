const PostService = require('../services/post.service') //import post service here

class PostController {
    static store(req, res) {
        const body = req.body; // retrieve request body / data
        const post = PostService.store(body); //call post service
        res.status(201).json(post)
    }
}
//so it takes the req u pass from yur app like postman and takes it thru postservice and adds it to the post array 
module.exports = PostController