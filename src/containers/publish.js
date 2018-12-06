// import { React } from 'react';
import { Col, Divider, Icon, Input, Popover, Row, Button, Table, Select } from 'antd';
import React, { PureComponent } from 'react';
import AdaptiveContainer from '../components/adaptive';
import RichText from "../components/editor";
import EditableTagGroups from "../components/edit-tags";
import { ColSizing } from '../misc/data/generalProps';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
// Should only have columns left at the end
import { columns, placehold } from '../misc/data/tableformat';

import * as userServices from '../redux/services/user';
import { getUser, complexAction } from '../redux/actions/users/base';

// Pull the placeholder data into here

const SearchBar = ColSizing.balanceContainer.searchBar;
const PaymentInfo = ColSizing.balanceContainer.paymentInformation;
const PaymentBlankSpace = ColSizing.balanceContainer.blankSpace;
const Option = Select.Option;


function handleChange(value) {
  console.log(`selected ${value}`);
}




class PublishPost extends PureComponent {
  constructor(props){
    super(props);
    // this.props.complexAction();
    // console.log(props)

    // Update the current page using redux

  }

  componentWillUpdate(nextProps, nextState){
    console.log(nextProps);
    console.log(nextState);
  }
  
  render(){
    return (
      <div>
        <AdaptiveContainer>
          
          <h3>Publish A Post</h3>
          <hr></hr>
          <Select defaultValue="general" style={{ width: 120 }} onChange={handleChange}>
            <Option value="general">General</Option>
            <Option value="art">Art</Option>
            <Option value="crypto">Crypto</Option>
            <Option value="fiction">Fiction</Option>
            <Option value="music">Music</Option>
          </Select>

          <div style={{padding:"1rem", background:"white", borderRadius:"0.2rem", border:"1px solid #d1d2d3", margin:'1rem 0'}}>
            <RichText></RichText>
          </div>

          <div style={{margin:"1rem"}}>
            <EditableTagGroups/>
          </div>
          
          <Button type="primary" block>Submit</Button>
          
        </AdaptiveContainer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  complexAction: () => dispatch(complexAction)
 })
 
  const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(PublishPost)
  const RouteApp = withRouter(ConnectApp)
 
 export default RouteApp;