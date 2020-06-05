const mongoose = require('mongoose');


// Map global promises
mongoose.Promise = global.Promise;

//Mongoose connect
mongoose.connect('mongodb://brad:brad@ds117888.mlab.com:17888/pusherpoll')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

