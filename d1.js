//策略模式
//模拟鸭子应用，游戏中出现各种鸭子，
//一边游泳，一边瓜瓜叫，于是我们设计了一个鸭子的超类，让各种鸭子继承这个超类

util = require('util');

var Duck = function(){}; 

Duck.prototype.display=function(){  //共有方法，子类可以继承 
  console.log('display');
};

Duck.prototype.swim=function(){
  console.log('swin');
};

Duck.prototype.quack=function(){
  console.log('quack');
};

module.exports=Duck;

//子类

// function MallardDuck(){
//   Duck.call(this);
// };

// util.inherits(MallardDuck,Duck);

// MallardDuck.prototype.display=function(){
//   console.log('MallardDuck display');
// };


// mallardduck = new MallardDuck();
// mallardduck.quack();
// mallardduck.swim();
// mallardduck.display();


