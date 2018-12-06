// import { React } from 'react';
import { Col, Divider, Icon, Input, Popover, Row, Button, Table, Select, Card } from 'antd';
import React, { PureComponent } from 'react';
import AdaptiveContainer, {AdaptiveHalfCol, AdaptiveCardGridContainer} from '../components/adaptive';
import RichText from "../components/editor";
import EditableTagGroups from "../components/edit-tags";
import LoginForum from "../components/forums/login";
import RegisterForum from "../components/forums/register";
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { complexAction } from '../redux/actions/complexActions';


// Pull the placeholder data into here


const Option = Select.Option;


function handleChange(value) {
  console.log(`selected ${value}`);
}

const RegisterPage = () => {
  return (
    <div>
      <h3 style={{textAlign:"center"}}>Register</h3>
        <RegisterForum/>
    </div>
  )
}


const LoginPage = () => {
  return (
    <div>
      <h3 style={{textAlign:"center"}}>Login</h3>
        <LoginForum/>
    </div>
  )
}


const tabListNoTitle = [{
  key: 'login',
  tab: 'Login',
}, {
  key: 'register',
  tab: 'Register',
}];

const contentListNoTitle = {
  login: <LoginPage/>,
  register: <RegisterPage/>
};


class Login extends PureComponent {
  state = {
    // key: 'tab1',
    noTitleKey: 'login'
  }

  
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


  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  }

  render(){
    return (
      <div>
        <AdaptiveCardGridContainer>
          <Card
            style={{ width: '100%' }}
            tabList={tabListNoTitle}
            activeTabKey={this.state.noTitleKey}
            onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
          >
            {contentListNoTitle[this.state.noTitleKey]}
          </Card>
        </AdaptiveCardGridContainer>
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
 
  const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(Login)
  const RouteApp = withRouter(ConnectApp)
 
 export default RouteApp;