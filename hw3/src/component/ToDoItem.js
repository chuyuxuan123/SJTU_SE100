import React from 'react';

class ToDoItem extends React.Component {
    delete() {
        this.props.deleteItem(this.props.data.id);
    }
    complete() {
        this.props.okItem(this.props.data.id);
    }
    render() {

        let { text, time, done, id } = this.props.data;

        return (
            <tr>
                <td>{text}</td>
                <td>{time}</td>
                <td>{done === 0 ? "未完成" : "完成"}</td>
                <td>
                    <button className="btn btn-primary" onClick={this.delete.bind(this)}>删除</button>
                    <button className="btn btn-success" onClick={this.complete.bind(this)}>
                        <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                        完成
                   </button>
                </td>
            </tr>
        );
    }
}

export default ToDoItem;  //导出ToDoItem模块