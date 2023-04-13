const PostController = require('../controllers/post.controller')

const routes = (app) => {
    app.post('/posts', PostController.store);
    app.get('/posts', PostController.findAll)
    app.get('/posts/:slug', PostController.find)
    app.delete('/posts/:uuid', PostController.delete)
    app.put('/posts/:uuid', PostController.update)
}//created this as an fx that takes a param(which is our express app) and its a route that takes app and passes it thru the api so we can use the app in the route(ther4 we export this fx)
//post is adding ang get will link up find eida all(thru method findAll) or 1 (thru find slug method) then retrieve 

module.exports = routes