import { Button, notification ,Layout, Menu, Radio, Table } from 'antd';
// import { Button, notification } from 'antd';

import React, { PureComponent } from 'react';
import _ from 'lodash';

// import logo from './logo.svg';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Head from './components/header';
import TopicBar  from './components/topicbar';
import PostList from "./containers/posts";
import SinglePost from "./containers/post";
import PublishPost from "./containers/publish";
import Account from "./containers/account";
import Login from "./containers/login";
import Help from "./containers/help";
import { Home }  from './containers/home';

import './theme/antd.less';



// HOW TO GET TRENDING AND HOT
// You will batch the computations by EPOCHs
// The epochs



const { Footer, Content } = Layout;

const openNotificationWithIcon = (type, title, description) => {
  notification[type]({
    message: title,
    description: description,
  });
};


class App extends PureComponent {
  
  constructor(props){
    super(props);
    this.state = {
      lastError: {}
    }
  }

  pushError(errRes){

    const title = errRes.data.title;
    const description = errRes.data.msg;
    this.setState({lastError: errRes})
    // console.log(errRes);
    openNotificationWithIcon("error", title, description);
  }

  componentWillUpdate(nextProps, nextState){
    const a = this.state.lastError;
    const b = nextProps.error.errorResponse;
    // const isSameAsLastErr = (this.state.lastError !== nextProps.error.errorResponse)
    
    if(_.isEqual(a, b) === false && b !== undefined){
      this.pushError(b);
    }
    // this.updateAllStates(nextProps);
  }

  render() {
    
    return (
      <div >
        <Layout className="layout">
          <Head/>
          <TopicBar {...this.props}/>
          <Content>
            <Switch>
              {/* <Route exact path="" component={Home}/> */}
              <Route exact path="/" component={Home}/>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/publish" component={PublishPost}/>
              <Route exact path="/help" component={Help}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/post" component={SinglePost}/>
              <Route exact path="/post/:postid" component={SinglePost}/>
              <Route exact path="/account" component={Account}/>
              <Route exact path="/view" component={PostList}/>
              <Route exact path="/view/:tag" component={PostList}/>
              <Route exact path="/view/:tag/:page" component={PostList}/>
            </Switch>
            
          </Content>
          {/* TODO: Style */}
          <Footer style={{textAlign:"center"}}>Copyright Nubit</Footer>
        </Layout>
      </div>
    )
  }
}


 const mapStateToProps = state => ({
  error: state.errors
 })




 const mapDispatchToProps = dispatch => ({
  // getUser: () => {dispatch(getUser())}
 });
 



const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(App)
const RouteApp = withRouter(ConnectApp)
 
 export default RouteApp;

 