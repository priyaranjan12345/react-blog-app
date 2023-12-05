import { request } from "../helper/axios_helper";

export class BlogService {
    /**
     * fetch on my blogs which are create by me.
     * @returns Response
     */
    getMyBlogs() {
        return request(
            "GET",
            "app/my-blogs"
        );
    }

    /**
     * get all blogs of other users' with my blog posts
     * @returns Response
     */
    getBlogs() {
        return request(
            "GET",
            "app/blogs"
        );
    }

    /**
     * get blog details by blog id
     * @param {blogId} blogId 
     * @returns Response
     */
    getBlog(blogId) {
        return request(
            "GET",
            "app/blogs/" + blogId
        );
    }

    createBlog() { 
        // update by form-data
     }
    deleteBlog() {
        // delete only my blog
     }
    updateBlog() { }
}

const blogService = new BlogService()
export default blogService