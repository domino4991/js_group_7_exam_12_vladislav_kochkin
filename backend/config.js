const path = require('path');

const rootPath = __dirname;

module.exports = {
    rootPath,
    uploadPath: path.join(rootPath, 'public/uploads'),
    database: `mongodb://localhost/picsDB`,
    databaseOpt: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    facebookAccess: '824762391699357',
    facebookSecret: 'f33530cf397885e83e830f6e53c2a611'
};