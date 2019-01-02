import React, { PureComponent } from 'react';
import { Skeleton, List, Switch, Row, Col, Card, Icon, Avatar, Button, Table, Divider, Tag} from 'antd';
import { Form, Input, Tooltip, Cascader, Select,  Checkbox, AutoComplete } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { NubitCard } from '../posts/card';
import QRCode from 'qrcode.react';
import axios from 'axios';

const { Meta } = Card;


const apiUrl = 'http://localhost:8000';

const instance = axios.create({
    baseURL: apiUrl
});

instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'


const gridStyle = {
  width: '50%',
  textAlign: 'center',
  minHeight: '14rem'
};



const columns = [{
    title: 'Transaction Hash',
    dataIndex: 'hash',
    key: 'hash',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: 'Amount (BCH)',
    dataIndex: 'amount',
    key: 'amount',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'Date',
    key: 'date',
    dataIndex: 'date',
    
  }];
  
const data = [{
    key: '1',
    hash: 'c66643463eb76a427cdc7a5cac3b574c125ecc68479ef598cc43fb5a207b95ce',
    amount: 0.05,
    address: 'New York No. 1 Lake Park',
    date: 10
  }, {
    key: '2',
    hash: '13723334a82a6ae7c0a35bc4fd666564a3dd53d5700bd27ceadb78bac6ee8217',
    amount: 0.05,
    address: 'London No. 1 Lake Park',
    date: 10
  }, {
    key: '3',
    hash: '3269b4731dd7a2c8cb5b071aace60a015c57ee9f5a06270fe60765c3e28ff008',
    amount: 0.05,
    address: 'London No. 1 Lake Park',
    date: 10
  }];
  


export class AccountTransactions extends PureComponent {
    /**
     * This is the master list for the account posts
     * 
     */
    constructor(props){
        super(props);
        this.state = {
            item_list: this.props.view.accountPageInfo.posts,
            pubkey: "wjiIMnuilnduzelndi289nrun933dhldnAPOIDNL",
            transactions: {
              incoming: [],
              outgoing: []
            }
        }
        this.getTransactions()
        // console.log(this.props)

        // Call for the first time
    }

    getTransactions(){
      instance.defaults.headers.common['Authorization'] = `Bearer ${this.props.user.token}`
      instance.post("/wallet/get", {}).then((res)=>{
        this.setState({transactions: res.data.data.transactions, pubkey: res.data.data.pubkey}) //console.log(res.data);
      }).catch((error)=>{
        console.log(error);
      })
    }

    componentWillUpdate(nextProps, nextState){
      // console.log(nextProps);
      // console.log(nextState);
        // console.log()
        // Should do an async waterfall to ensure everything is done well
        // this.setState({loading: true});
        // if(this.state.loading === false){
        //   this.setState({loading: true});
        // }
        // this.setTab(nextProps);
        // Set the event saying we're on the post page
        // Also set that we're at general and should light the medium bar
    }

    // margin-right: auto;
    // margin-left: auto;
    // display: block;
    // margin-bottom: 1rem;

    render(){
        return (
            <div>
              <Row gutter={16}>
                <Card title="Wallet" type="inner" actions={[<Icon type="plus" />, <Icon type="message" />]}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Card>
                    <QRCode style={{marginRight: "auto", marginLeft:"auto", display: "block", marginBottom: "1rem"}} value={this.state.pubkey} />
                    <p style={{textAlign:"center", display:"block"}}>{this.state.pubkey}</p>
                  </Card>
                  </Col>
                  
                  
                </Card>
                <br></br>
                
              </Row>
              <Row gutter={16}>
                <Col span={24} >
                    <Card title="Transactions" type="inner" style={{marginTop:"1rem"}}>
                      <Card title="Incoming" type="inner" style={{marginTop:"1rem"}} bodyStyle={{padding: "0rem"}}>
                        <Table columns={columns} dataSource={this.state.transactions.incoming} />
                      </Card>
                      <Card title="Outgoing" type="inner" style={{marginTop:"1rem"}} bodyStyle={{padding: "0rem"}}>
                        <Table columns={columns} dataSource={this.state.transactions.outgoing} />
                      </Card>
                    </Card>
                </Col>
              </Row>
               {/* <Table columns={columns} dataSource={data} /> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});


const mapDispatchToProps = dispatch => ({
    // views: bindActionCreators(view.actions, dispatch) 
})
   
  
  

   
const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(AccountTransactions);
const RouteApp = withRouter(ConnectApp);  
export default RouteApp;