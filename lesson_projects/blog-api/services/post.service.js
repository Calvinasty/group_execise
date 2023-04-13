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
        const posts = PostRepository.findAll()
        return posts
    }//to find all posts

    static find(slug) {
        const post = PostRepository.find(slug)
        return post
    }//to find specific post

    static delete(uuid) {
        const postIndex = PostRepository.findIndex(uuid)
        if (postIndex === -1) {
            //i.e post not found
            return false
        }
        PostRepository.delete(postIndex)
        return true
    }

    static update(uuid, data) {
        const postIndex = PostRepository.findIndex(uuid)
        if (postIndex === -1) {
            return false
        }
        const slug = data['title'].split('').join('-')
        data['uuid'] = slug.toLowerCase()
        data['slug'] = uuid

        const updatedPost = PostRepository.update(postIndex, data)
        return updatedPost;
    }
}

module.exports = PostService