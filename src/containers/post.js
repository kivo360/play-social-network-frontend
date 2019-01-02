import { Col, Divider, Icon, Input, Popover, Row, Table, message, Button } from 'antd';
import React, { PureComponent } from 'react';
import AdaptiveContainer, {AdaptiveCardGridContainer} from '../components/adaptive';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { PostComment } from '../components/posts/comment';
import { NubitCoverLong } from '../components/posts/card';
import { bindActionCreators } from 'redux';
import view from '../redux/slices/views';
import { refreshUser } from '../redux/actions/calls/user';
import { fetchPost } from '../redux/actions/calls/posts';
import _ from 'lodash';
import RichText from "../components/editor";

// import { Button } from 'antd/lib/radio';
import TextArea from 'antd/lib/input/TextArea';



// import { complexAction } from '../redux/actions/complexActions';

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
    this.props.views.clearPostTab()
    this.props.views.setCurrentView("post")
    this.state = {
      currentPost: {
        post: {
          title: "No title available",
          txt: "{}",
          img: "https://images.unsplash.com/photo-1519806390608-acf7ef9c8d1b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a489de1b153f25c3dce7e2c1325c956&auto=format&fit=crop&w=1868&q=80"
        },
        comments: [],
        votes: []
      },
      deserialized: {},
      visibleEditor: false
    }
    if (!("postid" in this.props.match.params)){
      message.error("Post-ID not found. Redirecting to 404 in 5 seconds.")
    }else{
      this.props.fetchPost(this.props.match.params.postid)

      // Load the page from the server here
      // Get post by id
    }
    // Get the current page from the params
    // Get more post information
    // Push the post information to the state
    
    // Force update
    // Also be able to say that the page doesn't have anything
    this.renderComments = this.renderComments.bind(this)
  }

  componentWillUpdate(nextProps, nextState){
    if(!_.isEqual(nextProps.view.currentPost, {})){
      this.setState({currentPost: nextProps.view.currentPost})
    }
  }

  renderDeserialized(){
    const j = JSON.parse(this.state.currentPost.post.txt);
    console.log(j);
  }

  reflect(commentValue){
    console.log(commentValue);
  }

  viewEditor(){
    if(this.state.visibleEditor){
      return (
        <div>
          <br/>
          <br/>
          <h3 style={{textAlign: "center", fontWeight:"bold"}}>Add a New Comment</h3>
          <RichText reflect={this.reflect}></RichText>
          <Button block type="primary" style={{marginTop: "1rem"}} onClick={()=>message.success("Successfully Pushed Comment")}>Post Comment</Button>
        </div>
        
      )
    }else{
      return (<div></div>)
    }
  }

  toggleViewEditor(){
    const current = this.state.visibleEditor;
    const negate = !current;
    this.setState({visibleEditor: negate})
    
  }

  renderComments(){
    console.log(this.state.currentPost);

    if(this.state.currentPost.comments.length > 0){
      return (
        this.state.currentPost.comments.forEach(element => {
          <PostComment/>
        })
      );
      
    }else{
      return (
        <p>No comments</p>
      )
    }
  }

  render(){
    return (
        <div>
        
            <AdaptiveContainer>
                {NubitCoverLong(this.state.currentPost.post.img)}
                <h1>{this.state.currentPost.post.title}</h1>
                <p>{this.state.currentPost.post.txt}</p>
                {this.renderDeserialized()}
                <Divider>Comments</Divider>
                {this.renderComments()}
                {this.viewEditor()}
                <br/>
                <br/>
                <br/>
                {/* style={{width: "100%", textAlign:"center"}} */}
                <Button block  onClick={this.toggleViewEditor.bind(this)}>Add comment</Button>

            </AdaptiveContainer>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  views: bindActionCreators(view.actions, dispatch),
  refresh: bindActionCreators(refreshUser, dispatch),
  fetchPost: bindActionCreators(fetchPost, dispatch)
})
 
const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(SinglePost);
const RouteApp = withRouter(ConnectApp);
 
export default RouteApp;