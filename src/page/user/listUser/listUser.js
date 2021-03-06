/*
   @auth: Yuan
 */

import React, { Component } from 'react';
import { Layout, Link, Table, Tag } from 'antd';


const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: '32',
    address: '西湖区湖底公园1号',
}, {
    key: '2',
    name: '李冰冰',
    age: '28',
    address: '宾夕法尼亚',
},{
    key: '3',
    name: '张无忌',
    age: '18',
    address: '武当山',
},
    {
        key: '4',
        name: '张无忌',
        age: '18',
        address: '武当山',
    },{
        key: '5',
        name: '张无忌',
        age: '18',
        address: '武当山',
    },{
        key: '6',
        name: '张无忌',
        age: '18',
        address: '武当山',
    },{
        key: '7',
        name: '张无忌',
        age: '18',
        address: '武当山',
    },{
        key: '8',
        name: '张无忌',
        age: '18',
        address: '武当山',
    },{
        key: '9',
        name: '张无忌',
        age: '18',
        address: '武当山',
    }
];

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
},{
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
},{
    title: '地址',
    dataIndex: 'address',
    key: 'address'
}];

class ListUser extends Component {


    render() {
        return (
            <div>
                <Table dataSource={dataSource} columns={columns}/>
            </div>
        );
    }


}

export default ListUser;

