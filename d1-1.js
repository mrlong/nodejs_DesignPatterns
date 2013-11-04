//从d1.js 内继承过来的，
// d1－1.js 变动的，
// 设计原则
// 找出应用中可能变化的地方，把它们独立出来，不要和那些不需要改变的代码混在一起。

util = require('util');
Duck = require('./d1');

duck = new Duck();
duck.quack();

//子类
var MallardDuck = function(){
  Duck.call(this);
}; 

util.inherits(MallardDuck,Duck);

MallardDuck.prototype.display=function(){
  console.log('MallardDuck display');
};

MallardDuck.prototype.other=function(){
  console.log('MakkardDuck other');
}

mallardduck = new MallardDuck();
mallardduck.quack();
mallardduck.swim();
mallardduck.display();
mallardduck.other();



