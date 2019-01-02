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

import AccountList from '../components/account/accountList';


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



class Help extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      placeholder: 1,
      isUser: this.props.userInfo.userSet,
      loading: false,
      // Get the welcome visibility from props
      isVisibleWelcome: this.props.dInfo.viewWelcome,
      homeTab: ''
    }
    this.props.views.clearPostTab()
    this.props.views.setCurrentView("help")
    this.props.refresh()
  }

  updateAllStates(nextProps){
    this.setState({isVisibleWelcome: nextProps.dInfo.viewWelcome})
  }

  closeOnClick(){
    // This should instead send to the global state for storage reasons. 
    // Set the state using the updateAllStates
    // With persistance, the user will be able to permanently dismiss the welcome menu
    this.props.decisions.removeWelcome();
    // this.setState({isVisibleWelcome: false})
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
        {/* {this.renderWelcome()} */}
        <AdaptiveContainer>
            <h1>Help page :)</h1>
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
  refresh: bindActionCreators(refreshUser, dispatch)

 })
 



//  const mapDispatchToProps = dispatch => ({
//   getUser: () => dispatch(getUser())
//  })
 
const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(Help)
const RouteApp = withRouter(ConnectApp)

export default RouteApp;
//  Home