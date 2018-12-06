// import { React } from 'react';
import { Col, Divider, Icon, Input, Popover, Row, Table, Card, List, Button } from 'antd';
import React, { PureComponent } from 'react';
import { BankContent } from '../components/bankcontent';
import AdaptiveContainer from '../components/adaptive';
import { ColSizing } from '../misc/data/generalProps';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AdaptiveCardGridContainer } from '../components/adaptive';
import { NubitCard } from '../components/posts/card';
import view from '../redux/slices/views'
import { bindActionCreators } from 'redux'


// Should only have columns left at the end
const ButtonGroup = Button.Group;


// Pull the placeholder data into here

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




class PostList extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      isId: true,
      tag: "general"
    }
    const prm = props.match.params;

    
    // Check that the post request is there
    if (!('tag' in prm)){
      
      this.props.history.push("/view/general");
      // this.state.tag = "general";
    }else{
      this.state.tag = prm.tag;
    }
    props.views.setPostTab(prm.tag)
    this.props.views.setCurrentView("postlist")
    // this.props.setPostTab(this.state.tag);

    // console.log(viewActions.setPostTab)
    // console.log(this.props.setPostTab(this.state.tag))
    // viewActions.setCurrentView('postList');
    // this.forceUpdate();
  }

  componentWillUpdate(nextProps, nextState){
    // console.log(nextProps);
    // console.log(nextState)
    const prm = nextProps.match.params;
    if (!('tag' in prm)){
      this.setState({tag:"general"});
      this.props.views.setPostTab("general");
    }else{
      this.setState({tag:prm.tag});
      this.props.views.setPostTab(prm.tag)
      // this.props.setPostTab(prm.tag);
    }

    // Set the event saying we're on the post page
    // Also set that we're at general and should light the medium bar
  }

  render(){
    return (
      <div>
        <div style={{padding:"1rem", backgroundColor: "#2b2b2b"}}>
            <h3 style={{textAlign:"center", fontWeight:"bold", color:"white"}}>#{String(this.state.tag).toLocaleUpperCase()}</h3>
        </div>
        
        <AdaptiveCardGridContainer>
            <Card>
              <List grid={{ gutter: 16, column: 1 }}
                  dataSource={item_list}
                  renderItem={item => (
                  <List.Item>
                      <NubitCard
                        url={item.url}
                        _avatar={item.avatar}
                        _title={item.title}
                        _description={item.description}
                        _history={this.props.history}
                        _pid={item.postId}
                        />
                    </List.Item>
                    )}/>
                

                <Col span={12} >
                    <Button type="primary" block>
                      <Icon type="left" />Go back
                    </Button>
                  </Col>
                <Col span={12}>
                  <Button type="primary" block>
                    Go forward<Icon type="right" />
                  </Button>
                </Col>
                
            
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
  views: bindActionCreators(view.actions, dispatch) 
 })
 
  const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(PostList)
  const RouteApp = withRouter(ConnectApp)
 
 export default RouteApp;