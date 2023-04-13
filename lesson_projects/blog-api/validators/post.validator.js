const { body } = require("express-validator");
const PostRepository = require('../repositories/post.repository')

const storeRules = [
    body('title').trim()
        .notEmpty().withMessage(`please add a title`).bail()
        .isLength({ min: 4 }).withMessage(`title must be at least 4 characters`).bail()
        .custom((val) => {
            const result = PostRepository.findByTitle(val)
            if (result !== -1) {
                throw new Error()
            }

            return true;
        })
        .withMessage('title already exists').bail(),

    body('content').trim()
        .notEmpty().withMessage(`write a message...`).bail()
        .isLength({ min: 10 }).withMessage(`message must be at least 10 characters`).bail()

]


module.exports = {
    storeRules,
    updateRules: storeRules
}