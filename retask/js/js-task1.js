// created by mosqlee on 2017.5.22
// 写成一个对象
var flash = new Object;
var t;
var btn = document.getElementsByTagName("button");
flash.box = document.getElementsByTagName("div");
// 获取随机数
flash.getRandom = function(num) {
  var a = Math.floor(Math.random()*(num+1));
  return a;
}
// 获取有三个随机数的数组
flash.getThreeRandom = function() {
  var a = new Array(3);
  while (a[0]===a[2]||a[0]===a[1]||a[1]===a[2]) {
    for(var i = 0;i <3;i++) {
      a[i] = this.getRandom(8);
    }
  }
  return a;
};
flash.getThreeRandom();
// 获取随机颜色方法一
flash.getRandomColorOne = function() {
  var a,b,c,d;
  a = this.getRandom(255);
  b = this.getRandom(255);
  c = this.getRandom(255);
  d = 'rgb('+a+','+b+','+c+')';
  return d
}
// 获取随机颜色方法二
flash.getRandomColorTwo = function() {
  var a,b;
  a = this.getRandom(16777215);
  a = a.toString(16);
  b = a.length;
  // 判断长度，长度不足6，补一个0
  while(b < 6) {
     a = "0"+ a;
     b++
  }
  console.log(a)
  // return a
};
// 获取随机颜色方法三
flash.getRandomColorThree = function() {
  var a = new Array(6);
  var b = '';
  for (var i = 0;i < 6;i++){
    a[i] = this.getRandom(15).toString(16);
    b = b + a[i]
  }
  return  "#" + b
};
// 清楚颜色
flash.clear = function() {
    for (var i=0;i<9;i++) {
    this.box[i].style.backgroundColor = '#59c5ed';
  } 
}
// blinkblinkblink
flash.flash1 = function() {
  this.clear();
  a = this.getThreeRandom();
  for (var i=0;i<3;i++) {
    this.box[a[i]].style.backgroundColor = this.getRandomColorThree()
  }
};

flash.flash = function() {
  clearInterval(t);
  t = setInterval(flash.flash1,1000)
};
flash.stop = function() {
  clearInterval(t);
};
btn[0].onclick = function() {
  flash.flash()
};
btn[1].onclick = function() {
  flash.stop();
  flash.clear();
}