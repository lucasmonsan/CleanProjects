import { Account, Client, Databases, Storage } from "appwrite";

// Variáveis de ambiente específicas para o ambiente de desenvolvimento
const endpoint = import.meta.env.VITE_ENDPOINT;
const projectId = import.meta.env.VITE_PROJECT_ID;
const bucketId = import.meta.env.VITE_BUCKET_ID;
const databaseId = import.meta.env.VITE_DATABASE_ID;
const collectionId = import.meta.env.VITE_COLLECTION_ID;

const client = new Client().setEndpoint(endpoint).setProject(projectId);

const account = new Account(client);

const databases = new Databases(client);
const storage = new Storage(client);

export {
  account,
  client,
  databases,
  storage,
  endpoint,
  projectId,
  bucketId,
  databaseId,
  collectionId,
};
