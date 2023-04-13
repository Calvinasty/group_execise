const PostController = require('../controllers/post.controller')

const routes = (app) => {
    app.post('/posts', PostController.store);
}//created this as an fx that takes a param and its a route that takes app and passes it thru the api so we can use the app in the route

module.exports = routes