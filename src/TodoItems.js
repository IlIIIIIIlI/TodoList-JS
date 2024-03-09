import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    //必写，否则访问不了props
    //super访问父类构造器 - 接受父组件传递的参数
    // 下面的this.props.entries / this.props.delete 都是传进来的
    super(props);
    console.log("props: ", props);

    // 为了保证createTasks方法中的this指向TodoItems，所以要执行绑定操作
    // a.bind(this) 使得 a 中的所有this指向this
    this.createTasks = this.createTasks.bind(this);

    //this.delete = this.delete.bind(this);
  }

  createTasks(item) {
    console.log(this);
    return (
      //this已经确定是todoItems了，所以delete一定是被todoItems调用
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  }

  delete(key) {
    // function delete(){};
    //调用父组件的方法
    console;
    this.props.delete(key);
  }

  // render 函数被执行就会生成新的 html
  // createTasks 执行，就可推断这个组件被重新渲染了
  // 当 this.props 或者 this.states 变化的时候，render会被重新执行
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return <ul className="theList">{listItems}</ul>;
  }
}

export default TodoItems;
