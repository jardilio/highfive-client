"use strict";

let env = process.env.NODE_ENV || 'development';
let config = {
    'development': {
        port: process.env.PORT || 8080
    },
    'production': {
        port: process.env.PORT || 8080
    }
};

module.exports = config[env];