const PostRepository = require('../respositories/post.repository')
const crypto = require('crypto');//imported to generate uuid

class PostService {
    static store(data) {
        const uuid = crypto.randomUUID();//generates uuid with the crypto package imported
        const slug = data['title'].split(' ').join('-')//the split will check whenever theres a space(' ')[can be anything u make it even a letter] and will insrt('-')to join it and make it a slug
        data['uuid'] = uuid;//adds the generated uuid
        data['slug'] = slug.toLowerCase();//ads the slug in small letters

        const post = PostRepository.store(data);//so with this he passed the complete data(which the post with its uuid and its slug) to the post.repo.js file to be added to the array
        return post;
    }

    static findAll() {
        const post = PostRepository.findAll()
        return posts
    }
}//to find all posts

module.exports = PostService