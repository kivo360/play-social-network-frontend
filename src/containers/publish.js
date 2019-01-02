// import { React } from 'react';
import { Col, Divider, Icon, Input, Popover, Row, Button, Table, Select, notification, Upload, message } from 'antd';
import React, { PureComponent } from 'react';
import AdaptiveContainer, {AdaptiveCardGridContainer} from '../components/adaptive';
import RichText from "../components/editor";
import EditableTagGroups from "../components/edit-tags";
import { ColSizing } from '../misc/data/generalProps';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import view from '../redux/slices/views';
import { refreshUser } from '../redux/actions/calls/user';
import axios from 'axios';

// Should only have columns left at the end
import { columns, placehold } from '../misc/data/tableformat';

import * as userServices from '../redux/services/user';
// import { getUser, complexAction } from '../redux/actions/users/base';

// Pull the placeholder data into here

const Dragger = Upload.Dragger;
const Option = Select.Option;


// We can save images now to s3 using aiofiles and s3
const apiUrl = 'http://localhost:8000';

const instance = axios.create({
    baseURL: apiUrl
});

instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'


function handleChange(value) {
  console.log(`selected ${value}`);
}


const openNotificationWithIcon = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  });
};




class PublishPost extends PureComponent {
  constructor(props){
    super(props);
    console.log(props);
    this.props.views.clearPostTab()
    this.props.views.setCurrentView("publish")
    // console.log(this.props.userInfo);
    this.state = {
      isUser: this.props.userInfo.userSet,
      disableForums: false,
      img: "",
      main: "general",
      editorValue: undefined,
      title: ""
    }


    const self = this;
    this._props = {
      name: 'file',
      multiple: true,
      // Create a simple high capacity upload server for the user
      action: '//localhost:8000/image', // Place upload information here to place link for user. Make this required before sending to rest of application
      onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
          self.setCurrentFile(info); // WOuld set to this.state.img

        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    // const util = Utility()
    // util.extractQS(this.props);

    this.checkUser = this.checkUser.bind(this);
    // Update the current page using redux
    this.checkUser()
  }

  setCurrentFile(file){
    // file.response should have the required information to know where the file should be stored
    console.log(file)
  }

  checkUser(){
    if(this.state.isUser === false){
      openNotificationWithIcon('warning', 'Not Signed In', "You're not signed into the application. We're disabling the page until you are.");
      // Disable the editor and submit button here
      this.setState({disableForums: true});
    }
  }

  handleChange(value) {
    this.setState({main: value})
    // console.log(`selected ${value}`);
  }

  componentWillUpdate(nextProps, nextState){
    this.checkUser();
  }
  
  onSubmit(){
    const token = this.props.userInfo.token;
    const self = this;
    /**
     * title = r.get("title", None)
    main = r.get("main", None)
    tags = r.get("tags", None)
    txt = r.get("txt", None)
    img = r.get("img", None)
     */
    const sendObj = {
      title: this.state.title,
      tags: ["one", "two", "three"],
      txt: JSON.stringify(this.state.editorValue),
      img: this.state.img,
      main: this.state.main // The main tag goes here usually
    }
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`

    instance.post('/post/publish', sendObj).then((res)=> {
      // console.log(res.data);
      const d = res.data;
      notification.success({message:d.title, description: d.msg})
      self.props.history.push(`/post/${d.data.post_id}`)
    }).catch((err)=>{
        notification.error({
            message: "Post not published",
            description: "We couldn't add the posts"
          }
        )
    })
    
  }

  onChange(e){
    // console.log(e.target.name);
    const name = e.target.name;
    const value = e.target.value;
    // console.log(e.target.value);
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  onChangeReflect(vj){
    this.setState({editorValue: vj})
  }

  render(){
    return (
      <div>
        <AdaptiveCardGridContainer>
          
          <h3>Publish A Post</h3>
          <hr></hr>
          <Input placeholder="Title" name="title" style={{marginBottom: "0.5rem", marginTop: "0.1rem"}} onChange={this.onChange.bind(this)}/>
          <Select defaultValue="general" style={{ width: "100%" }} onChange={this.handleChange.bind(this)} disabled={this.state.disableForums}>
            <Option value="general">General</Option>
            <Option value="art">Art</Option>
            <Option value="crypto">Crypto</Option>
            <Option value="fiction">Fiction</Option>
            <Option value="music">Music</Option>
          </Select>

          <div style={{padding:"1rem", background:"white", borderRadius:"0.2rem", border:"1px solid #d1d2d3", margin:'1rem 0'}}>
            <RichText reflect={this.onChangeReflect.bind(this)} disabled={this.state.disableForums}></RichText>
          </div>

          <div style={{margin:"1rem"}}>
            <EditableTagGroups/>
          </div>
          
          <Dragger {...this._props} disabled={this.state.disableForums}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
        </Dragger>

        <br></br>

          <Button type="primary" block disabled={this.state.disableForums} onClick={this.onSubmit.bind(this)}>Submit</Button>
          
        </AdaptiveCardGridContainer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.user
});

 const mapDispatchToProps = dispatch => ({
  views: bindActionCreators(view.actions, dispatch),
  refresh: bindActionCreators(refreshUser, dispatch)
 })
 
  const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(PublishPost)
  const RouteApp = withRouter(ConnectApp)
 
 export default RouteApp;