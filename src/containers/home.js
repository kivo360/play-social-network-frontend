import { Col, Divider, Icon, Input, Popover, Row, Table, Card, List, Button, Pagination } from 'antd';
import React, { PureComponent } from 'react';
import { complexAction } from '../redux/actions/complexActions';
import AdaptiveContainer, {AdaptiveHalfCol, Adaptive8, Adaptive16, AdaptiveCardGridContainer} from '../components/adaptive';
import { NubitCard } from '../components/posts/card';
const { Meta } = Card;


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
  key: 'trending',
  tab: 'Trending',
}, {
  key: 'new',
  tab: 'New',
}, {
  key: 'hot',
  tab: 'Hot',
}];



export class Home extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      placeholder: 1
    }
  }

  render(){
    return (
      <div>
        {/* TODO: Put into it's own component(s) */}
        
        <div className="welcome-nubit"> 
          <Icon style={{color: "white", textAlign:"right"}} type="close" />
          
          <AdaptiveContainer>
            <Adaptive8>
              <h1 style={{color: "white", fontSize:"40px", fontWeight:"bold", fontFamily: "'Open Sans', sans-serif"}}>Your voice is worth something</h1>  
              <p style={{color: "white"}}>Get paid for good content. Post and upvote articles on Steemit to get your share of the daily rewards pool.</p>
              <AdaptiveHalfCol>
                <div style={{padding: "5px"}}>
                  <Button block>Sign Up</Button>
                </div>
              </AdaptiveHalfCol>
              <AdaptiveHalfCol>
                <div style={{padding: "5px"}}>
                  <Button type="primary" block>Learn More</Button>
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
        <AdaptiveContainer>
            <Card
              tabList={tabListNoTitle}
            >
              <List grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3 }}
                  dataSource={item_list}
                  renderItem={item => (
                  <List.Item>
                      <NubitCard
                        url={item.url}
                        _avatar={item.avatar}
                        _title={item.title}
                        _description={item.description}
                        _pid={item.postId}
                        _history={this.props.history}/>
                    </List.Item>
                    )}/>
                <AdaptiveHalfCol>
                <div style={{padding: "5px"}}>
                  <Button block>Previous Page</Button>
                </div>
              </AdaptiveHalfCol>
              <AdaptiveHalfCol>
                <div style={{padding: "5px"}}>
                  <Button type="primary" block>Next Page</Button>
                </div>
              </AdaptiveHalfCol>
            </Card>
        </AdaptiveContainer>

    </div>
    )
  }
}

// // Make sure to have the 
// export const Home = () => {
  
//   return (
    // <div>
    //     <div className="welcome-nubit">
    //       <Icon style={{color: "white", textAlign:"right"}} type="close" />
    //       <AdaptiveContainer>
    //         <Adaptive8>
    //           <h1 style={{color: "white", fontSize:"40px", fontWeight:"bold", fontFamily: "'Open Sans', sans-serif"}}>Your voice is worth something</h1>  
    //           <p style={{color: "white"}}>Get paid for good content. Post and upvote articles on Steemit to get your share of the daily rewards pool.</p>
    //           <AdaptiveHalfCol>
    //             <div style={{padding: "5px"}}>
    //               <Button block>Sign Up</Button>
    //             </div>
    //           </AdaptiveHalfCol>
    //           <AdaptiveHalfCol>
    //             <div style={{padding: "5px"}}>
    //               <Button type="primary" block>Learn More</Button>
    //             </div>
    //           </AdaptiveHalfCol>
    //         </Adaptive8>
    //         <Adaptive16>
    //           <div style={{padding: "0 3rem"}}>
    //             <h1 style={{color: "white", textAlign:"center", fontSize:"60px", fontWeight:"bold", fontFamily: "'Open Sans', sans-serif"}}>[LOGO GOES HERE]</h1>
    //             <h1 style={{color: "white", textAlign:"center", fontSize:"30px", fontWeight:"bold", fontFamily: "'Open Sans', sans-serif"}}>Share your voice with Bitcoin Cash and Nubit</h1>
    //           </div>
              
    //         </Adaptive16>

    //       </AdaptiveContainer>    
    //     </div>
    //     <AdaptiveContainer>
    //         <Card
    //           tabList={tabListNoTitle}
    //         >
    //           <List grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3 }}
    //               dataSource={item_list}
    //               renderItem={item => (
    //               <List.Item>
    //                   <NubitCard
    //                     url={item.url}
    //                     _avatar={item.avatar}
    //                     _title={item.title}
    //                     _description={item.description}
    //                     _pid={item.postId}
    //                     _history={this.props.history}/>
    //                 </List.Item>
    //                 )}/>
    //             <AdaptiveHalfCol>
    //             <div style={{padding: "5px"}}>
    //               <Button block>Previous Page</Button>
    //             </div>
    //           </AdaptiveHalfCol>
    //           <AdaptiveHalfCol>
    //             <div style={{padding: "5px"}}>
    //               <Button type="primary" block>Next Page</Button>
    //             </div>
    //           </AdaptiveHalfCol>
    //         </Card>
    //     </AdaptiveContainer>

    // </div>
// )}