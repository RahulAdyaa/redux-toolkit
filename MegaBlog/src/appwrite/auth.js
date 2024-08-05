import conf from "../conf/conf"
import {Client , Account , ID } from "appwrite"

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) 
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)

    }
    async createAccount ({email , password,name}){
        //there can be fail cases , so from javascript , we use try catch technique that if any eerror comes then it will automatically throw an error.

        try {
            const userAccount= await this.account.create(ID.unique(),email,password,name);
            if (userAccount) {
                // call another method\
                return this.login({email,password});

            } else {
                return userAccount
            }
        } catch (error) {
            throw error;// we can more gracefully handle error but can be done in backend also , so no need to do thid here
            
        }
    }
    async  login({email ,password}){
        try {
          return await  this.account.createEmailSession(email,password);
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("AppWrite service::getCurrentUser::error",error);
        }
        return null // agar try catch mein ki dikkat ajaye to bhi null aayega aur agar try pe pahunche hi nai tab bhi null hi ayega
    }
    async logout(){
        try {
             await this.account.deleteSessions()
            
        } catch (error) {
            console.log("AppWrite service::logout::error",error);
        }
    }
}

const authService =  new AuthService()

export default authService