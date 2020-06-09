const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser : true, useUnifiedTopology: true},(err) => {
    if(!err) console.log(process.env.MONGODB_URI,'mongodb connection successful..');
    else
    console.log("error in connection"+ JSON.stringify(err, undefined, 2));
}); 


require('./user_model')