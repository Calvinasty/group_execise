
const posts = [];

class PostRepository {
    static store(data) {
        posts.push(data);
        return posts.find(post => post.uuid === data.uuid);
    }
}

module.exports = PostRepository