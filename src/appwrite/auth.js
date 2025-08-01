import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }

  // Send password recovery email
  async sendPasswordRecovery(email) {
    try {
      // Make sure this matches your deployed frontend's reset password page
      return await this.account.createRecovery(
        email,
        'https://appwrite-blog-ashen-one.vercel.app/reset-password' // <-- Replace with your actual Vercel frontend URL if different
      );
    } catch (error) {
      throw error;
    }
  }
  
  // Reset the password using secret and userId from the email link
  async updatePassword({ userId, secret, newPassword }) {
    try {
      return await this.account.updateRecovery(
        userId,
        secret,
        newPassword,
        newPassword
      );
    } catch (error) {
      throw error;
    }
  }

}

const authService = new AuthService();

export default authService;