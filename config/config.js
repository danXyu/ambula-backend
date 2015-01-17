var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'ambula-backend'
    },
    port: 3000,
    db: 'mongodb://localhost/ambula-backend-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'ambula-backend'
    },
    port: 3000,
    db: 'mongodb://localhost/ambula-backend-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'ambula-backend'
    },
    port: 3000,
    db: 'mongodb://localhost/ambula-backend-production'
    
  }
};

module.exports = config[env];
