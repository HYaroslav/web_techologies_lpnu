var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Admin:Admin123@cluster0.rc0ng.mongodb.net/Cluster0?retryWrites=true&w=majority');
console.log("mongodb connect....")
module.exports=mongoose;