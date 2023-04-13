
const posts = [];//sekof we no dey use data base this stores the every post (which is an object) in this array

class PostRepository {
    static store(data) {
        posts.push(data);
        return posts.find(post => post.uuid === data.uuid);
    }
    static findAll() {
        return posts
    }//to find all posts

    static find(slug) {
        const post = posts.find((item) => item.slug === slug)
        return post
    }//to find a specific post using the slug and returns it

}
//we created an fx called store; static store part => adds to the array of posts(const posts no!). return post part => searches the array(const posts) for the newly added post using the uuid amd then returns the post

module.exports = PostRepository