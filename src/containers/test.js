// import { React } from 'react';
import { Col, Divider, Icon, Input, Popover, Row, Table, Card, Avatar, List } from 'antd';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import {AdaptiveCardGridContainer} from '../components/adaptive';
import {NubitCard} from '../components/posts/card';


// Pull the placeholder data into here
const gridStyle = {
    width: '50%',
    paddingBottom: '50%',
    textAlign: 'center',
    margin: "1rem 0"
  };
  
  

const item_list = [
    {
        url: "https://images.unsplash.com/photo-1543699454-f1acfec4adb4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9168756d4728fa1a08cd01503a14e3e7&auto=format&fit=crop&w=634&q=80",
        avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
        title: "Card title 1",
        description: "This is the description 1"
    },
    {
        url: "https://images.unsplash.com/photo-1543521891-37e42f3ac7bc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e12096e4152ff85eb9a0e627cbc31108&auto=format&fit=crop&w=1350&q=80",
        avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
        title: "Card title 2",
        description: "This is the description 2"
    },
    {
        url: "https://images.unsplash.com/photo-1543732967-1311a61777d9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=791d33d883e6376eacd85e052016297b&auto=format&fit=crop&w=1350&q=80",
        avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
        title: "Card title 3",
        description: "This is the description 3"
    },
    {
        url: "https://images.unsplash.com/photo-1543716627-839b54c40519?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=945402d0832181236e72ad5658c0f340&auto=format&fit=crop&w=1868&q=80",
        avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
        title: "Card title 4",
        description: "This is the description 4"
    },
    {
        url: "https://images.unsplash.com/photo-1543709508-c6c0f5f70cb7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7dd93cb78ef40b446c4f8847bb63fb9f&auto=format&fit=crop&w=1905&q=80",
        avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
        title: "Card title 5",
        description: "This is the description 5"
    },
    {
        url: "https://images.unsplash.com/photo-1543686465-5caa01f6b13f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce13c249ee27e7c8b0ba721f51ce1114&auto=format&fit=crop&w=1355&q=80",
        avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
        title: "Card title 6",
        description: "This is the description 6"
    }
]


const { Meta } = Card;

class TestItem extends PureComponent {
  constructor(props){
      super(props);
  }

  componentWillUpdate(nextProps, nextState){
    console.log(nextProps);
    console.log(nextState);
  }
  render(){
    return (
        <div>
            <AdaptiveCardGridContainer>
            <Card>
                <List
                    grid={{ gutter: 16, column: 1 }}
                    dataSource={item_list}
                    renderItem={item => (
                    <List.Item>
                        <NubitCard
                            url={item.url}
                            _avatar={item.avatar}
                            _title={item.title}
                            _description={item.description}/>
                    </List.Item>
                    )}
                />


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
//   complexAction: () => dispatch(complexAction)
 })
 
  const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(TestItem)
  const RouteApp = withRouter(ConnectApp)
 
 export default RouteApp;