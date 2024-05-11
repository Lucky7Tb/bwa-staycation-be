import { env } from "./Env.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.33.0/mod.ts";

const mongoDbUrl = `mongodb://$1@${env.DB_HOST}:${env.PORT}/${env.DB_NAME}`;
if (env.DB_USERNAME) {
  if (env.DB_PASSWORD) {
    mongoDbUrl.replace("$1", `${env.DB_USERNAME}:${env.DB_PASSWORD}`);
  } else {
    mongoDbUrl.replace("$1", `${env.DB_USERNAME}`);
  }
}

const mongoClient = new MongoClient();

async function connect() {
  await mongoClient.connect(mongoDbUrl);
}

function client() {
  return mongoClient.database();
}

export const db = { connect, client };
