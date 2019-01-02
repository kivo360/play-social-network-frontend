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
import { bindActionCreators } from 'redux';
import view from '../redux/slices/views';
import { refreshUser } from '../redux/actions/calls/user';


// import { complexAction } from '../redux/actions/complexActions';


// Pull the placeholder data into here


const Option = Select.Option;


function handleChange(value) {
  console.log(`selected ${value}`);
}


// TODO: Add a next page to enter a bunch of account information for the first time. 
// TODO: Use the information saved in the token to recognize what needs to be sent in to the user
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
    this.props.views.clearPostTab()
    this.props.views.setCurrentView("login")

    
    // this.props.complexAction();
    // console.log(props)
    // Update the current page using redux
    if(this.props.user.userSet === true){
      this.props.history.push("/")
    }
  }

  

  componentWillUpdate(nextProps, nextState){
    if(nextProps.user.userSet === true){
      this.props.history.push("/")
    }
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
  views: bindActionCreators(view.actions, dispatch),
  refresh: bindActionCreators(refreshUser, dispatch)

 })
 
 
  const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(Login)
  const RouteApp = withRouter(ConnectApp)
 
 export default RouteApp;