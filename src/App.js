import { Button, Layout, Menu, Radio, Table } from 'antd';
import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Head from './components/header';
import TopicBar  from './components/topicbar';
import PostList from "./containers/posts";
import SinglePost from "./containers/post";
import PublishPost from "./containers/publish";
// import TestFrame from "./containers/test";
import Login from "./containers/login";
import { Home }  from './containers/home';

import './theme/antd.less';







const { Footer, Content } = Layout;


class App extends PureComponent {
  
  constructor(props){
    super(props);

  }

  render() {
    
    return (
      <div >
        <Layout className="layout">
          <Head/>
          <TopicBar {...this.props}/>
          <Content>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/publish" component={PublishPost}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/post/:postid" component={SinglePost}/>
              <Route exact path="/account/:accid" component={SinglePost}/>
              <Route exact path="/view" component={PostList}/>
              <Route exact path="/view/:tag" component={PostList}/>
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
  ...state
 })




 const mapDispatchToProps = dispatch => ({
  // getUser: () => {dispatch(getUser())}
 });
 



const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(App)
const RouteApp = withRouter(ConnectApp)
 
 export default RouteApp;

 