const PostController = require('../controllers/post.controller')
const Validator = require('../validators/validator')
const PostValidator = require('../validators/post.validator')
const PostImageUploader = require('../uploaders/post-image.uploader')

const routes = (app) => {
    app.post('/posts',
        PostImageUploader('public/uploads/posts').single('image'),
        Validator.validate(PostValidator.storeRules),
        PostController.store);
    app.get('/posts', PostController.findAll);
    app.get('/posts/:slug', PostController.find);
    app.delete('/posts/:uuid', PostController.delete);
    app.put('/posts/:uuid', Validator.validate(PostValidator.updateRules), PostController.update);
}//created this as an fx that takes a param(which is our express app) and its a route that takes app and passes it thru the api so we can use the app in the route(ther4 we export this fx)
//post is adding ang get will link up find eida all(thru method findAll) or 1 (thru find slug method) then retrieve 

module.exports = routes