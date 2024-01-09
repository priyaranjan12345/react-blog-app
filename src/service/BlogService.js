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

    createBlog({ ...data }) {
        const formData = new FormData()
        const date = new Date().toJSON().replace("Z", "");

        formData.append("blogTitle", data.blogTitle)
        formData.append("blogDescription", data.blogDescription)
        formData.append("publishDate", date)
        formData.append("blogType", data.blogType)
        formData.append("completed", data.blogCompleted)
        formData.append("blogImage", data.blogImage[0])

        return request(
            "POST",
            "app/create-blog",
            formData,
            { "Content-Type": "multipart/form-data" },
        );

    }

    updateBlog({ ...data }, blogId) {
        const formData = new FormData()
        const date = new Date().toJSON().replace("Z", "");

        formData.append("blogTitle", data.blogTitle)
        formData.append("blogDescription", data.blogDescription)
        formData.append("publishDate", date)
        formData.append("blogType", data.blogType)
        formData.append("completed", data.blogCompleted)
        formData.append("blogImage", data.blogImage)

        return request(
            "PUT",
            "app/update-blog/" + blogId,
            formData,
            { "Content-Type": "multipart/form-data" },
        );
    }

    deleteBlog(blogId) {
        return request(
            "DELETE",
            "app/delete-blog/" + blogId,
        );
    }

}

const blogService = new BlogService()
export default blogService