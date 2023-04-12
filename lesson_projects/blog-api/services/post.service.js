const PostRepository = require('../respositories/post.repository')
const crypto = require('crypto');

class PostService {

    static store(data) {
        const uuid = crypto.randomUUID();
        const slug = data['title'].split(' ').join('-')
        data['uuid'] = uuid;
        data['slug'] = slug.toLowerCase();

        const post = PostRepository.store(data);
        return post;
    }
}

module.exports = PostService