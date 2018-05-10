
import React, { Component } from 'react';

// 用户
export default class User extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="user-page">
                <span>{this.props.name}</span>
                <button onClick={() => {this.props.getName();}}>click</button>
            </div>
        );
    }
}