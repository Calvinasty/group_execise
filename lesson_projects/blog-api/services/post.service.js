const PostRepository = require('../respositories/post.repository')
const crypto = require('crypto');//imported to generate uuid

class PostService {
    static store(data) {
        const uuid = crypto.randomUUID();//generates uuid with the crypto package imported
        const slug = data['title'].split(' ').join('-')//the split will check whenever theres a space(' ') and will insrt('-')to join it and make it a slug
        data['uuid'] = uuid;
        data['slug'] = slug.toLowerCase();

        const post = PostRepository.store(data);
        return post;
    }
}

module.exports = PostService