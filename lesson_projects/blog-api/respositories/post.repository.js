
let posts = [];//sekof we no dey use data base this stores the every post (which is an object) in this array

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

    static findIndex(uuid) {
        const index = posts.findIndex(item => item.uuid === uuid)
    }//finds an index for id in case a post finna be deleted

    static delete(index) {
        posts.splice(index, 1)
    }


}
//we created an fx called store; static store part no => adds to the array of posts(const posts no!). return post part => searches the array(const posts) for the newly added post using the uuid amd then returns the post

module.exports = PostRepository