const PostController = require('../controllers/post.controller')

const routes = (app) => {
    app.post('/posts', PostController.store);
}

module.exports = routes