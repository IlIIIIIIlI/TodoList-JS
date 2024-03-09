class User {
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  getName() {
    console.log("this:  ", this);
    return "name: " + this.weight;
  }

  getAge() {
    return "age: " + this.age;
  }

  //定义阶段，我定义这个s
  //s的值，是调用阶段决定的
  getUserInfo(s) {
    return this.getName() + s + this.getAge();
  }
}

const user = new User("tt", 11);

// console.log("name: ", user.name);
// console.log("age: ", user.age);
// console.log(user.getName());
// console.log("getUserInfo: ", user.getUserInfo("--"));

//把getName函数赋值给getNameOuter
// 在js中，函数就是变量，函数是js中的第一等公民

const user2 = { name: "zenos", weight: "19" };

// ----- 第一种改变this的方法，用一个对象方法给另一个对象用
user2.getName = user.getName;

// console.log(user2);
//一个函数的this指向：
// 如果是一个对象调用这个函数，那么这个函数的this会指向这个对象

// ----- bind的作用，是改变函数中的this指向
const getNameOuter = user.getName.bind(user2);
console.log(getNameOuter());
