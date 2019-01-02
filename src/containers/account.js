import { Button, Card, Icon, Avatar, Spin, Drawer } from 'antd';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import AdaptiveContainer, { Adaptive16, Adaptive8, AdaptiveHalfCol } from '../components/adaptive';

import QRCode from 'qrcode.react';
import axios from 'axios';

import { NubitCard } from '../components/posts/card';
import AccountList from '../components/account/accountList';
import AccountTransactions from '../components/account/transactions'; 
import { refreshUser } from '../redux/actions/calls/user';

import view from '../redux/slices/views';
import user from '../redux/slices/user';
import _ from "lodash";

import Utility from '../util'


const apiUrl = 'http://localhost:8000';

const instance = axios.create({
    baseURL: apiUrl
});

instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};



const item_list = [
  {
      url: "https://images.unsplash.com/photo-1543699454-f1acfec4adb4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9168756d4728fa1a08cd01503a14e3e7&auto=format&fit=crop&w=634&q=80",
      avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
      title: "Card title 1",
      description: "This is the description 1",
      postId: "1df1eeea-e810-4a85-8f72-9ff748785300"
  },
  {
      url: "https://images.unsplash.com/photo-1543521891-37e42f3ac7bc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e12096e4152ff85eb9a0e627cbc31108&auto=format&fit=crop&w=1350&q=80",
      avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
      title: "Card title 2",
      description: "This is the description 2",
      postId: "2909f882-85f1-4423-a5a4-e064e2f9535c"
  },
  {
      url: "https://images.unsplash.com/photo-1543732967-1311a61777d9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=791d33d883e6376eacd85e052016297b&auto=format&fit=crop&w=1350&q=80",
      avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
      title: "Card title 3",
      description: "This is the description 3",
      postId: "6f20d3fe-ea8f-42af-b4a9-7b6b27e5516f"
  },
  {
      url: "https://images.unsplash.com/photo-1543716627-839b54c40519?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=945402d0832181236e72ad5658c0f340&auto=format&fit=crop&w=1868&q=80",
      avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
      title: "Card title 4",
      description: "This is the description 4",
      postId: "c68f3c9f-c7c3-49d1-bb67-ac35a0644263"
  },
  {
      url: "https://images.unsplash.com/photo-1543709508-c6c0f5f70cb7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7dd93cb78ef40b446c4f8847bb63fb9f&auto=format&fit=crop&w=1905&q=80",
      avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
      title: "Card title 5",
      description: "This is the description 5",
      postId: "bd71f753-45bf-4ac4-9e1e-22bdcfa56d63"
  },
  {
      url: "https://images.unsplash.com/photo-1543686465-5caa01f6b13f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce13c249ee27e7c8b0ba721f51ce1114&auto=format&fit=crop&w=1355&q=80",
      avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
      title: "Card title 6",
      description: "This is the description 6",
      postId: "3b5752bd-76aa-4464-876f-7e2b639549f0"
  }
]


const tabListNoTitle = [{
  key: 'post',
  tab: 'Posts',
}, {
  key: 'activities',
  tab: 'Activites',
}, {
  key: 'transactions',
  tab: 'Transactions',
}];


const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Account extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      placeholder: 1,
      username: 'awholenewworld',
      description: "This is the user's description",
      loading: false,
      accountList: [],
      tabList: [{
        key: 'post',
        tab: 'Posts',
      }, {
        key: 'transactions',
        tab: 'Transactions',
      }],
      currentTab: 'post',
    }

    this.accountContentMap= {
      post: <AccountList item_list={this.props.view.accountPageInfo.posts}/>,
      transactions: <AccountTransactions/>
    }

    const prm = props.match.params;

    this.props.views.clearPostTab()
    this.props.views.setCurrentView("account")
    this.updatePage()
    // const util = new Utility()
    // const currentUser = util.extractQS(this.props.location);
    // const self = this;
    // if("id" in currentUser){
    //   // TODO: Create a generalized shortcut to add the Call early. You want to hardcode and duplicate now to reduce complexity.
    //   instance.post('/profile/view', {id: currentUser.id}).then((res)=> {
        
    //     // console.log(res);
    //     // console.log(res.data.account);
    //     const account = res.data.account;
    //     const user = res.data.data;
    //     this.setState({description: account.description, username: user.username});
    //   }).catch((error)=> {
    //     console.log(error);
    //   })

    //   instance.post('/lists/user', {user: currentUser.id}).then((res)=>{
    //     console.log(res);
    //     this.props.views.setAccountPosts(res.data.data)
    //     this.setState({accountList: res.data.data})
    //   }).catch((error)=>{
    //     console.log(error);
    //   })
    // }else if (_.isEqual(this.props.user.user, {}) === false){
    //   const userid = {id: this.props.user.user.sid}
      
    //   console.log(this.props.user)
    //   instance.post('/profile/view', userid).then((res)=> {
    //     console.log(res);
    //     console.log(res.data.data);
    //     const account = res.data.account;
    //     const user = res.data.data;
    //     this.setState({description: account.description, username: user.username});
    //   }).catch((error)=> {
    //     console.log(error.response);
    //   })
      
    //   instance.post('/lists/user', userid).then((res)=>{
    //     console.log(res.data.data);
    //     // this.props.views.setAccountPosts(res.data.data)
    //     this.setState({accountList: res.data.data})
    //   }).catch((error)=>{
    //     console.log(error.response);
    //   })
    // }else{
    //   this.props.users.clearUserInfo()
    // }
    // // Check for the account id
    // // Check the account id

    
  }

  updatePage(){
    const util = new Utility()
    const currentUser = util.extractQS(this.props.location);
    const self = this;
    if("id" in currentUser){
      // TODO: Create a generalized shortcut to add the Call early. You want to hardcode and duplicate now to reduce complexity.
      instance.post('/profile/view', {id: currentUser.id}).then((res)=> {
        
        // console.log(res);
        // console.log(res.data.account);
        const account = res.data.account;
        const user = res.data.data;
        this.setState({description: account.description, username: user.username});
      }).catch((error)=> {
        console.log(error);
      })

      instance.post('/lists/user', {user: currentUser.id}).then((res)=>{
        console.log(res);
        this.props.views.setAccountPosts(res.data.data)
        this.setState({accountList: res.data.data})
      }).catch((error)=>{
        console.log(error);
      })
    }else if (_.isEqual(this.props.user.user, {}) === false && _.isEqual(this.props.user.user, undefined) === false){
      const userid = {id: this.props.user.user.sid}
      
      console.log(this.props.user)
      instance.post('/profile/view', userid).then((res)=> {
        console.log(res);
        console.log(res.data.data);
        const account = res.data.account;
        const user = res.data.data;
        this.setState({description: account.description, username: user.username});
      }).catch((error)=> {
        console.log(error.response);
      })
      
      instance.post('/lists/user', userid).then((res)=>{
        console.log(res.data.data);
        // this.props.views.setAccountPosts(res.data.data)
        this.setState({accountList: res.data.data})
      }).catch((error)=>{
        console.log(error.response);
      })
    }else{
      this.props.users.clearUserInfo()
    }
    // Check for the account id
    // Check the account id

  }

  getAccountList(){
    // const { accountList } = this.state;
    return (
      <AccountList item_list={this.props.view.accountPageInfo.posts}/>
    )
  }

  isCurrent(){
    // Check to see if the signed in user is the one viewing the page
    return false;
  }

  renderWalletButton(){
    if(this.isCurrent()){
      return (
        <Button>Get Wallet</Button>
      )
    }else{
      <div></div>
    }
  }

  componentWillUpdate(nextProps, nextState){
    // Also, create a check to see if the state and props are different
    // console.log(nextState);
    // console.log(nextState);
    console.log(nextProps.view.accountPageInfo.posts);
    if (nextState.currentTab !== nextProps.view.accountTab && nextProps.view.accountTab !== ""){
      this.setState({currentTab: nextProps.view.accountTab});
    }
    if(_.isEqual(this.state.accountList, nextProps.view.accountPageInfo.posts) === false){
      this.setState({accountList: nextProps.view.accountPageInfo.posts})
      this.updatePage();
    }
    else if(_.isEqual(nextProps.view.accountPageInfo.posts, [])){
      // this.updatePage()
    }
    // 
    
  }

  toggleLoading(){
    if(this.state.loading === false){
      this.setState({loading: true});
    }else{
      this.setState({loading: false});
    }
  }

  loadTab(){
    if(this.state.loading === true){
      return (
        <div style={{display:"block", textAlign: "center"}}>
          <Spin style={{textAlign: "center"}} indicator={antIcon} />
        </div>
      )
    }else{
      if(this.state.currentTab === "post"){
        return (
          <AccountList item_list={this.state.accountList}/>
        )
      }else if(this.state.currentTab === "transactions"){
        return (
          <AccountTransactions/>
        )
      }else{
        return (
          <div></div>
        )
      }
    }
  }


  onTabChange = (key) => {
    const self = this;
    this.toggleLoading();
    this.props.views.setAccountTab(key);
    setTimeout(()=>{
      self.toggleLoading()
    }, 1000)
    // Toggle loading
    // Set the current state of tabs to the key
    // Load the latest information for the user
    // Send action to get the information
    // Set the information inside of the action
    // On componentWillUpdate, de-load the bar and set the new information
    // this.setState({ [type]: key });
  }

  render(){

    return (
      <div>
        {/* TODO: Put into it's own component(s) */}
        
        <div className="account-nubit"> 
          {/* <Icon style={{color: "white", textAlign:"right"}} type="close" /> */}
          
          <AdaptiveContainer>
              <div style={{textAlign:"center"}}>
                <Avatar size={150} icon="user" />
                <h1 style={{color: "white", fontSize:"36px", fontWeight:"bold", fontFamily: "'Open Sans', sans-serif"}}>{this.state.username}</h1>  
                <p style={{color: "white"}}>{this.state.description}</p>
                
                {/* Place this into a function to display the wallet */}
                {this.renderWalletButton()}
                {/* {console.log(this.state.accountList)} */}
                {/* Put this into a modal???? */}
                {/* <QRCode value="http://facebook.github.io/react/" />
                <p>http://facebook.github.io/react/</p> */}
                {/* <p style={{color: "white"}}>Get paid for good content. Post and upvote articles on Steemit to get your share of the daily rewards pool.</p> */}
              </div>

          </AdaptiveContainer>    
        </div>
        <AdaptiveContainer>
            <Card
              tabList={this.state.tabList}
              onTabChange={this.onTabChange}
              activeTabKey={this.state.currentTab}
            >
              {this.loadTab()}
              
            </Card>
        </AdaptiveContainer>

    </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});




const mapDispatchToProps = dispatch => ({
  users: bindActionCreators(user.actions, dispatch),
  views: bindActionCreators(view.actions, dispatch),
  refresh: bindActionCreators(refreshUser, dispatch)
});
 



//  const mapDispatchToProps = dispatch => ({
//   getUser: () => dispatch(getUser())
//  })
 
const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(Account)
const RouteApp = withRouter(ConnectApp)

export default RouteApp;
//  Home