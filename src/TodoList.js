import React, { Component } from "react";
import TodoItems from "./TodoItems";
//类的形式写的组件
//function (){return <div></div>} 函数组件
//累组件 ，组件
class TodoList extends Component {
  //构造函数
  constructor(props) {
    super(props);
    //定义组件会用到的变量
    //类组件用到的所有变量都会放在state里面，
    // 因为state是响应式的
    this.state = { items: [] };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(event) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this._inputElement.value = "";
    }
    console.log(this.state.items);
    event.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
    });
  }

  // 类组件把需要返回的html写在render方法里面
  // 定义
  // render会被react框架调用
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          {/* form 的 onsubmit 没有指定路径会跳转 / 
					根路径的意思： http://host/
					*/}
          <form onSubmit={this.addItem}>
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder="enter task"
            ></input>
            <button type="submit">add</button>
          </form>
          {/* 父子组件 */}
          <TodoItems
            entries={this.state.items}
            delete={this.deleteItem}
            test={"test111"}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
