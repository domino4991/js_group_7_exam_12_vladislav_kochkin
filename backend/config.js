const path = require('path');

const rootPath = __dirname;

let dbName;

if(process.env.NODE_ENV === 'test') {
    dbName = 'musicApp_test';
} else {
    dbName = 'musicApp';
}

module.exports = {
    rootPath,
    uploadPath: path.join(rootPath, 'public/uploads'),
    database: `mongodb://localhost/${dbName}`,
    databaseOpt: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    facebookAccess: '824762391699357',
    facebookSecret: 'f33530cf397885e83e830f6e53c2a611'
};