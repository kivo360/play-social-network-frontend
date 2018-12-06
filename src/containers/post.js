import { Col, Divider, Icon, Input, Popover, Row, Table,  } from 'antd';
import React, { PureComponent } from 'react';
import AdaptiveContainer from '../components/adaptive';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { PostComment } from '../components/posts/comment';
import { NubitCoverLong } from '../components/posts/card';
import { complexAction } from '../redux/actions/complexActions';

// Here we map the call to the global state.

// Steps:
// 1. Pull the information from server
// 2. Add Current Post To Global State
// 3. Get the newest props and store the content inside of state
// 4. Get the state and load the content
// 5. Iterate through comments and load using list
class SinglePost extends PureComponent {
  constructor(props){
    super(props);
    // Get the current page from the params
    // Get more post information
    // Push the post information to the state
    
    // Force update
    // Also be able to say that the page doesn't have anything
  }

  componentWillUpdate(nextProps, nextState){
    
  }

  render(){
    return (
        <div>
        
            <AdaptiveContainer>
                {NubitCoverLong("https://images.unsplash.com/photo-1519806390608-acf7ef9c8d1b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a489de1b153f25c3dce7e2c1325c956&auto=format&fit=crop&w=1868&q=80")}
                <h1>Show Current Post Title Here (in state)</h1>
                <p>Content Component Goes Here</p>
                <Divider orientation="left">Comments</Divider>
                <PostComment/>
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
 
  const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(SinglePost)
  const RouteApp = withRouter(ConnectApp)
 
 export default RouteApp;