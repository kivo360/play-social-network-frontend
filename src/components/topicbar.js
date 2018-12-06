import {Menu, Row } from 'antd';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import view from '../redux/slices/views';


class TopicBar extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            current: ''
        }
    }

    handleClick = (e) => {
        this.setState({
          current: e.key,
        });
    }
    

    componentWillUpdate(nextProps, nextState){
        this.setState({current: nextProps.view.postTab}); 
    }

    render(){
        
        return (
            <div style={{padding: "0 3rem"}}>
                <Row>
                    <Menu
                        mode="horizontal"
                        style={{lineHeight: "30px"}}
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                    >
                        <Menu.Item key="general">
                            <Link to="/view/general">#general</Link>
                        </Menu.Item>
                        <Menu.Item key="crypto">
                            <Link to="/view/crypto">#crypto</Link>
                        </Menu.Item>
                        <Menu.Item key="fiction">
                            <Link to="/view/fiction">#fiction</Link>
                        </Menu.Item>
                        <Menu.Item key="art">
                            <Link to="/view/art">#art</Link>
                            
                        </Menu.Item>
                        <Menu.Item key="music">
                            <Link to="/view/music">#music</Link>
                        </Menu.Item>
                        <Menu.Item key="science">
                            <Link to="/view/science">#science</Link>
                        </Menu.Item>
                        <Menu.Item key="funny">
                            <Link to="/view/funny">#funny</Link>
                        </Menu.Item>
                        <Menu.Item key="photos">
                            <Link to="/view/photos">#photos</Link>
                        </Menu.Item>
                        <Menu.Item key="meta">
                            <Link to="/view/meta">#meta</Link>
                        </Menu.Item>
                    </Menu>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});
  
  
  
  
const mapDispatchToProps = dispatch => ({
    views: bindActionCreators(view.actions, dispatch) 
})
   

const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(TopicBar)
const RouteApp = withRouter(ConnectApp)

export default RouteApp;