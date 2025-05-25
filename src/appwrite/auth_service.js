import { Account, Client, ID } from 'appwrite'
import config from '../config/config'

const client = new Client()
    .setEndpoint(config.appWriteUrl)
    .setProject(config.appWriteProjectId)

const account = new Account(client)

const user = await account.create(
    ID.unique(),
    'hamdan123@gmail.com',
    'password12'
)