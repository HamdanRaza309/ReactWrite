import { config } from '../config/config'
import { Databases, Query, Client, ID, Storage } from 'appwrite'

export class DbService {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId)

        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.error('Failed to create post:', error.message);
            throw new Error("Could not create post. Please try again later.");
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            await this.databases.updateDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
            return true;
        } catch (error) {
            console.error('Failed to update post:', error.message);
            throw new Error("Could not update post. Please try again later.");
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.error('Failed to delete post:', error.message);
            throw new Error("Could not delete post. Please try again later.");
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            );
        } catch (error) {
            console.error('Failed to fetch post:', error.message);
            throw new Error("Could not fetch the post. It may not exist.");
        }
    }

    async getPosts() {
        try {
            return await this.databases.getDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                [
                    Query.equal('status', 'active')
                ]
            );
        } catch (error) {
            console.error('Failed to fetch posts:', error.message);
            throw new Error("Could not fetch the posts. It may not exist.");
        }
    }

    async listPosts() {
        try {
            return await this.databases.listDocuments(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
            );
        } catch (error) {
            console.error('Failed to list posts:', error.message);
            throw new Error("Could not retrieve posts. Please try again later.");
        }
    }

    // File services
    async uploadFile(file) {
        try {
            await this.storage.createFile(
                config.appWriteBucketId,
                ID.unique(),
                file
            );
            return true;
        } catch (error) {
            console.error('Failed to upload file:', error.message);
            throw new Error("Could not upload file. Please try again later.");
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                config.appWriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.error('Failed to delete file:', error.message);
            throw new Error("Could not delete file. Please try again later.");
        }
    }

    async getFilePreview(fileId) {
        try {
            return this.storage.getFilePreview(
                config.appWriteBucketId,
                fileId
            );
        } catch (error) {
            console.error('Failed to get file preview:', error.message);
            throw new Error("Could not get file preview. Please try again later.");
        }
    }

}



const dbService = new DbService();
export default dbService;