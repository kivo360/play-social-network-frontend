import React, { PureComponent } from 'react';
import { Skeleton, List, Switch, Row, Col, Card, Icon, Avatar, Button} from 'antd';
import { Form, Input, Tooltip, Cascader, Select,  Checkbox, AutoComplete } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { NubitCard } from '../posts/card';


const { Meta } = Card;



export class AccountPosts extends PureComponent {
    /**
     * This is the master list for the account posts
     * 
     */
    constructor(props){
        super(props);
        this.state = {
            item_list: this.props.view.accountPageInfo.posts
        }
        console.log(props);
    }

    componentWillUpdate(nextProps, nextState){
        // console.log()
        // Should do an async waterfall to ensure everything is done well
        // this.setState({loading: true});
        // if(this.state.loading === false){
        //   this.setState({loading: true});
        // }
        // this.setTab(nextProps);
        // Set the event saying we're on the post page
        // Also set that we're at general and should light the medium bar
      }

    render(){
        const { item_list } = this.props;
        console.log(item_list)
        return (
            <div>
                <List grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 }}
                    dataSource={item_list}
                    renderItem={item => (
                    <List.Item>
                        <NubitCard
                            url={item.image}
                            _avatar={item.avatar}
                            _title={item.title}
                            _description={item.description}
                            _pid={item.pid}
                            _maintag={item.mtag}
                            _token={()=>{
                                return ""
                            }}
                            _history={this.props.history}/>
                        </List.Item>
                    )}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});


const mapDispatchToProps = dispatch => ({
    // views: bindActionCreators(view.actions, dispatch) 
})
   
  
  
  
  //  const mapDispatchToProps = dispatch => ({
  //   getUser: () => dispatch(getUser())
  //  })
   
  const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(AccountPosts)
  const RouteApp = withRouter(ConnectApp)
  
  export default RouteApp;