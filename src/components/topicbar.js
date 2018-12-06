import {Menu, Row } from 'antd';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class TopicBar extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            currentMenu: '',
            currentKey: ''
        }
    }

    

    // Components will recieve props
        // update the current key inside both of the menus
    componentWillUpdate(nextProps, nextState){
        console.log(nextProps);
        console.log(nextState);
    }

    render(){
        
        return (
            <div style={{padding: "0 3rem"}}>
                <Row>
                    <Menu
                        mode="horizontal"
                        style={{lineHeight: "30px"}}
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
   })
  
  
  
  
const mapDispatchToProps = dispatch => ({
// getUser: () => {dispatch(getUser())}
});
   
  
  
  
  //  const mapDispatchToProps = dispatch => ({
  //   getUser: () => dispatch(getUser())
  //  })
   
const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(TopicBar)
const RouteApp = withRouter(ConnectApp)

export default RouteApp;