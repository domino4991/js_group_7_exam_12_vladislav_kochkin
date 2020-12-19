const mongoose = require('mongoose');
const {nanoid} = require('nanoid');
const config = require('./config');

const User = require('./models/User');
const Picture = require('./models/Picture');

mongoose.connect(config.database, config.databaseOpt);

const db = mongoose.connection;

db.once('open', async () => {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        for(let collItem of collections) {
            await db.dropCollection(collItem.name);
        }
        const [john, sam] = await User.create({
            username: 'john',
            password: 'testpass',
            token: nanoid(),
            displayName: 'John Doe'
        }, {
            username: 'sam',
            password: 'testpass',
            token: nanoid(),
            displayName: 'Sam Carter'
        });

        await Picture.create({
            user: john,
            name: 'Waterfall',
            image: 'waterfall.jpg'
        }, {
            user: john,
            name: 'Schweiz',
            image: 'schweiz.jpg'
        }, {
            user: sam,
            name: 'Architects Band',
            image: 'architects.jpg'
        });
    } catch (e) {
        console.log(e);
    }
    await db.close();
});