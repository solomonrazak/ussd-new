import {createClient} from "redis";
import dotenv from "dotenv";

dotenv.config();

export const redisClient = createClient({
    url: process.env.REDIS_URL
});

redisClient.on("connect", () => {
    console.log("Redis client connected");
})

redisClient.on("error", (err) => {
    console.error("Redis client error", err);
});
