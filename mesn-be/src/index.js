import connectDB from './database';
import dotenv from 'dotenv';
import createServer from './server';

async function main() {
    try {
        dotenv.config();
        await connectDB();
        createServer();
    } catch (error) {
        console.log(error);
    }
};

main();