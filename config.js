'use strict'

var config = {
    "app": {
        "port": 2200,
        // "level": "MEDIO"
    },
    "url": {
        "host": "10.50.100.201",
        "port": 80,
        "path": "/url",
        "serviceName": "getConfigUrl"
    },
    "usaDatabase": true,
    "datasources": {
        "user": 'sa',
        "password": 'adsttt123',
        "server": 'localhost',
        "database": 'test',
        "port": '1433'
    },
    "params": [
        {
            "app": "base",
            "params": [
                {"code": "url_logout"},
                {"code": "mail_to"},
                {"code": "mail_from"}
            ]
        },
        {
            "app": "app",
            "params": [
                {"code": "puerto"}
            ]
        }
    ],
    "usaCrypter": false
};

module.exports = config;
