import { Button, Card, Icon, List } from 'antd';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import AdaptiveContainer, { Adaptive16, Adaptive8, AdaptiveHalfCol } from '../components/adaptive';
import { NubitCard } from '../components/posts/card';
import view from '../redux/slices/views';
import decisions from '../redux/slices/userDecisions';
import { refreshUser } from '../redux/actions/calls/user';
import { fetchHomePosts, fetchHomeTrendingPosts } from '../redux/actions/calls/lists';

import axios from 'axios';

import AccountList from '../components/account/accountList';
const apiUrl = 'http://localhost:8000';

const instance = axios.create({
    baseURL: apiUrl
});

instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'


const tabListNoTitle = [{
  key: 'trending',
  tab: 'Trending',
}, {
  key: 'new',
  tab: 'New',
}, {
  key: 'hot',
  tab: 'Hot',
}];



class Homes extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      placeholder: 1,
      isUser: this.props.userInfo.userSet,
      loading: false,
      // Get the welcome visibility from props
      isVisibleWelcome: this.props.dInfo.viewWelcome,
      homeTab: '',
      placeholderItems: [
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
    }
    this.props.views.clearPostTab()
    this.props.views.setCurrentView("home")
    this.props.fetchHomeNew()
    // if(this.props.views){

    // }
    // this.props.refresh(this.props.user.token);
  }

  updateAllStates(nextProps){
    this.setState({ isVisibleWelcome: nextProps.dInfo.viewWelcome })
  }

  closeOnClick(){
    // This should instead send to the global state for storage reasons. 
    // Set the state using the updateAllStates
    // With persistance, the user will be able to permanently dismiss the welcome menu
    this.props.decisions.removeWelcome();
  }

  clickSignup(){
    // Should push the user to move to the next screen
    this.props.history.push("/login");
  }
  clickLearnMore(){
    this.props.history.push("/help");
  }

  onTabChange = (key) => {
    const self = this;
    this.toggleLoading();
    this.props.views.setHomeTab(key);
    // Replace with a toggling action inside of redux
    setTimeout(()=>{
      self.toggleLoading();
    }, 1000)
  }

  renderWelcome(){
    // Set the is hidden welcome using the close icon
    if(this.state.isUser === false && this.state.isVisibleWelcome === true){
      return (
        <div className="welcome-nubit"> 
          <Icon style={{color: "white", textAlign:"right"}} type="close" onClick={this.closeOnClick.bind(this)} />
          
          <AdaptiveContainer>
            <Adaptive8>
              <h1 style={{color: "white", fontSize:"40px", fontWeight:"bold", fontFamily: "'Open Sans', sans-serif"}}>Your voice is worth something</h1>  
              <p style={{color: "white"}}>Get paid for good content. Post and upvote articles on Steemit to get your share of the daily rewards pool.</p>
              <AdaptiveHalfCol>
                <div style={{padding: "5px"}}>
                  <Button block onClick={this.clickSignup.bind(this)}>Sign Up</Button>
                </div>
              </AdaptiveHalfCol>
              <AdaptiveHalfCol>
                <div style={{padding: "5px"}}>
                  <Button type="primary" block onClick={this.clickLearnMore.bind(this)}>Learn More</Button>
                </div>
              </AdaptiveHalfCol>
            </Adaptive8>
            <Adaptive16>
              <div style={{padding: "0 3rem"}}>
                <h1 style={{color: "white", textAlign:"center", fontSize:"60px", fontWeight:"bold", fontFamily: "'Open Sans', sans-serif"}}>[LOGO GOES HERE]</h1>
                <h1 style={{color: "white", textAlign:"center", fontSize:"30px", fontWeight:"bold", fontFamily: "'Open Sans', sans-serif"}}>Share your voice with Bitcoin Cash and Nubit</h1>
              </div>
              
            </Adaptive16>

          </AdaptiveContainer>    
        </div>
      )
    } else{
      return (
        <div></div>
      )
    }
  }


  componentWillUpdate(nextProps, nextState){
    this.updateAllStates(nextProps);
  }

  toggleLoading(){
    if(this.state.loading === false){
      this.setState({loading: true});
    }else{
      this.setState({loading: false});
    }
  }

  render(){
    return (
      <div>
        {this.renderWelcome()}
        <AdaptiveContainer>
            <Card
              tabList={tabListNoTitle}
              onTabChange={this.onTabChange}
            >
              <AccountList item_list={this.props.viewInfo.homeContent.newPosts}/>
            </Card>
        </AdaptiveContainer>

    </div>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.user,
  viewInfo: state.view,
  dInfo: state.decisions
});




const mapDispatchToProps = dispatch => ({
  views: bindActionCreators(view.actions, dispatch),
  decisions: bindActionCreators(decisions.actions, dispatch),
  refresh: bindActionCreators(refreshUser, dispatch),
  fetchHomeNew: bindActionCreators(fetchHomePosts, dispatch),
  fetchHomeTrend: bindActionCreators(fetchHomeTrendingPosts, dispatch)
 })
 



//  const mapDispatchToProps = dispatch => ({
//   getUser: () => dispatch(getUser())
//  })
 
const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(Homes)
const RouteApp = withRouter(ConnectApp)

export const Home = RouteApp;
//  Home