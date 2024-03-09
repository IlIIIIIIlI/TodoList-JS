import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";

// 查找一个dom，dom的id为container，返回dom的实例
// JS 操作 DOM 的方法，四种增删改查，这个是查
// document 是浏览器环境下的全局变量
// document.getElementById("")
// document.querySelectorsAll("")
var destination = document.querySelector("#container");

//调用ReactDOM对象中的render函数
ReactDOM.render(
  //我们需要挂载的组件
  <div>
    <TodoList />
  </div>,
  // 需要挂载的地方
  destination
);

function test(para1, param2) {}

test(1, 2);
