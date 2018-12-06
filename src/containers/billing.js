// import { React } from 'react';
import { Col, Divider, Icon, Input, Popover, Row, Table } from 'antd';
import React, { PureComponent } from 'react';
import { BankContent } from '../components/bankcontent';
import { ColSizing } from '../misc/data/generalProps';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
// Should only have columns left at the end
import { columns, placehold } from '../misc/data/tableformat';

import * as userServices from '../redux/services/user';

// Pull the placeholder data into here

const SearchBar = ColSizing.balanceContainer.searchBar;
const PaymentInfo = ColSizing.balanceContainer.paymentInformation;
const PaymentBlankSpace = ColSizing.balanceContainer.blankSpace;



// console.log(complexAction)

const content = (
    <div style={{minWidth: '10rem'}}>
      <BankContent/>
      <Divider/>
      <span><a><Icon type="plus-circle" theme="outlined" /> Add Payment Source </a> </span>
    </div>
  );


class Billing extends PureComponent {
  constructor(props){
    super(props);
    // this.props.complexAction();
    // console.log(props)

  }

  componentWillUpdate(nextProps, nextState){
    console.log(nextProps);
    console.log(nextState);
  }
  render(){
    return (
      <div>
      <div className="balance-container">
        <Row>
          {/* Set the sizes to a different file. Use to replicate the sizing across many sections */}
          <Col {...PaymentInfo}>
            <h2 >Your Balance: 1234.54</h2>
            <h4>
              Payment Method - Bank of America *3230 <Popover placement="bottom" content={content}><Icon type="down" theme="outlined" /></Popover>
            </h4>
          </Col>
          <Col {...PaymentBlankSpace}>
          
          </Col>
          <Col {...SearchBar}>
            <Input style={{marginTop: '1.2rem'}} placeholder="Search For Shipments" />
          </Col>
        </Row>
        
      </div>
      <Table columns={columns} dataSource={placehold} />
    </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  // complexAction: () => dispatch(complexAction)
 })
 
  const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(Billing)
  const RouteApp = withRouter(ConnectApp)
 
 export default RouteApp;