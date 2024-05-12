import {
  Database,
  MongoClient,
} from "https://deno.land/x/mongo@v0.33.0/mod.ts";
import { env } from "./Env.ts";
import { logger } from "./Logger.ts";

let mongoDbUrl = `mongodb://$1@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`;
if (env.DB_USERNAME) {
  if (env.DB_PASSWORD) {
    mongoDbUrl = mongoDbUrl.replace(
      "$1",
      `${env.DB_USERNAME}:${env.DB_PASSWORD}`
    );
  } else {
    mongoDbUrl = mongoDbUrl.replace("$1", `${env.DB_USERNAME}`);
  }
} else {
  mongoDbUrl = mongoDbUrl.replace("$1@", "");
}

const mongoClient = new MongoClient();
let client: Database;
let retry = 0;
while (retry < 3) {
  try {
    client = await mongoClient.connect(mongoDbUrl);
    break;
  } catch (err) {
    retry++;
    logger.info(`Attempt to connect to database: ${retry}`);
    if (retry > 3) {
      logger.error(`Error connect to database`, { ...err });
    }
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 10000));
  }
}
export { client };
