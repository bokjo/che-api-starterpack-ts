const fs = require('fs');

module.exports = {
    development: {
        username: 'dev',
        password: 'super_secret',
        database: 'boilerplate',
        host: '127.0.0.1',
        port: 5432,
        dialect: 'postgres',
    },
    staging: {
        username: process.env.STAGING_DB_USERNAME,
        password: process.env.STAGING_DB_PASSWORD,
        database: process.env.STAGING_DB_NAME,
        host: process.env.STAGING_DB_HOSTNAME,
        port: process.env.STAGING_DB_PORT,
        // url: process.env.PROD_DB_URL // Example: postgres://<db_user>:<db_password>@127.0.0.1:5432/dev_db, // TODO: add only ENV var... or use something like AWS Config params to get the secrets... 
        dialect: 'postgres',
    },
    production: {
        username: process.env.PROD_DB_USERNAME,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME,
        host: process.env.PROD_DB_HOSTNAME,
        port: process.env.PROD_DB_PORT,
        // url: process.env.PROD_DB_URL // Example: postgres://<db_user>:<db_password>@127.0.0.1:5432/dev_db, // TODO: add only ENV var... or use something like AWS Config params to get the secrets... 
        dialect: 'postgres',
    }
};