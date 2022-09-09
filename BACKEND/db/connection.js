const mongoose = require('mongoose');
const URL ='mongodb+srv://mayank:mayankgagz123@cluster0.vuzsy2h.mongodb.net/We-Connect?retryWrites=true&w=majority';
mongoose.connect(URL,{maxPoolSize:5},(err)=>{
    if(err){
        console.log('DB Error ', err);
    }
    else{
        console.log('DB Connection Created...');
    }
});
module.exports = mongoose;
