//
//继承
//

var util = require('util');

//超类
var Parson = function(name){
  this.name = name;
};

Parson.prototype.getName = function(){  //公有属性
  return this.name;
};

//子类
Programmer = function(name,sex){
  Parson.call(this,name);
  this.sex = sex;
};

util.inherits(Programmer,Parson);

Programmer.prototype.getSex=function(){
  return this.sex;
};

var p = new Programmer('mrlong','nam');

console.log(p.getName());
console.log(p.getSex());


