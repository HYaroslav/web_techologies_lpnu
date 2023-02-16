
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://gslaavko:4486@web.yp9170c.mongodb.net/?retryWrites=true&w=majority',{
  keepAlive: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
mongoose.set('useFindAndModify', false);
console.log("Connect with db...")
module.exports=mongoose;
