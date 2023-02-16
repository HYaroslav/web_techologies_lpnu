var User=require('./user');
var user=new User('Yaroslav','Horodyskyi');
console.log('firstname: '+user.first);
console.log('lastname: '+user.last);
user.fullName();
