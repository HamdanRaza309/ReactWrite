import config from '../config/config';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        // Configure the Appwrite client
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ name, email, password }) {
        try {
            console.log("Creating account:", { name, email });

            // Create user account
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            // Check if account creation was successful
            if (userAccount) {
                // Log in the user after successful account creation
                return await this.login({ email, password });
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error in createAccount:", error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;
