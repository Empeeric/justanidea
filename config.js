// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    // ### Development **(default)**
    development: {
        url: 'http://dev.empeeric.com',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: '80'
        }
    },



    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'http://www.justanidea.co',
        mail: {
            transport: 'SMTP',
            options: {
                service: 'Sendgrid',
                auth: {
                    user: 'app19038357@heroku.com',
                    pass: 'c9kk80ik'
                }
            }
        },

        database: {
            client: 'pg',
            connection: {
                host: 'ec2-54-247-106-185.eu-west-1.compute.amazonaws.com',
                user: 'smknpmkmhpyhmq',
                password: 'p-dUmHCjgdR0gin8LzlZlI_VTm',
                database: 'daepnk39n56mgg',
                port: '5432'
            },
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        }
    },




    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        }
    },

    // ### Travis
    // Automated testing run through Github
    travis: {
        url: 'http://127.0.0.1:2368',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-travis.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    }
};

// Export config
module.exports = config;
