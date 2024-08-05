import conf from "../conf/conf";

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases; //these are properties
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("AppWrite service::craetePost::error", error);
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("AppWrite service::updatePost::error", error);
    }
  }
  async deletePost({ slug }) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("AppWrite service::deletePost::error", error);
      return false;
    }
  }
  async getPost({ slug }) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("AppWrite service::getPost::error", error);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    //no need to give parameters here because we have to take all the posts
    // but we have to give one parameter that is queries , which will ensure that only those posts will be shown whose status is active
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
        //can put concept of pagination also , which will only show posts within the limit
      );
    } catch (error) {
      console.log("AppWrite service::getPosts::error", error);
      return false;
    }
  }
  //file upload services

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
        //idhar se upload hoke ek id hi milega
      );
    } catch (error) {
      console.log("AppWrite service::uploadFile::error", error);
      return false;
    }
  }

  async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId

        )
    } catch (error) {
        console.log("AppWrite service::deleteFile::error", error);
        return false
        
    }
  }

  getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )

  }

}

const service = new Service();

export default service;
