import React from 'react';
import {Divider} from 'antd';
export const columns = [{
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (text) => 
        <a href="javascript:;">{text}</a>
    ,
  }, {
    title: 'Shipment',
    dataIndex: 'shipment',
    key: 'shipment',
  }, {
    title: 'Locations',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'Reference',
    key: 'reference',
    dataIndex: 'reference'
  },
  {
    title: 'Amount',
    key: 'amount',
    dataIndex: 'amount'
  },
  {
    title: 'Documents',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    ),
  }];


  export const placehold = [{
    key: '1',
    name: 'John Brown',
    date: '03/21/2018',
    shipment: 'XHW1SK',
    reference: 'PO-2736723, SO-372679959…',
    amount: 1234.34,
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    date: '03/21/2018',
    shipment: 'HSXKW1',
    reference: 'PO-2736723, SO-372679959…',
    amount: 1234.34,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  }, {
    key: '3',
    name: 'Joe Black',
    date: '03/21/2018',
    shipment: 'KW1XHS',
    reference: 'LA Gear Pumps 12',
    amount: 1234.34,
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }];