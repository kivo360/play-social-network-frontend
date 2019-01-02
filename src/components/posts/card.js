import React, { PureComponent } from 'react';
import { Card, Icon, Avatar, Popover, Select, Row, Col, message, Modal, Button, Tag } from 'antd';
import axios from 'axios';
import {withRouter} from 'react-router-dom';




const Option = Select.Option;


const { Meta } = Card;

const apiUrl = 'http://localhost:8000';

const instance = axios.create({
    baseURL: apiUrl
});

instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'



const getBackgroundUrl = (url) => {
    const endUrl = "url("+url+")"
    return endUrl;
}

export const NubitCover = (url, clicky) => {
    const current = getBackgroundUrl(url);
    return (
    <div className="aspect-ratio-box"
        onClick={clicky}
        style={{
            background: current,
            backgroundSize: "cover"   
        }}
    ></div>
)}

export const NubitCoverLong = (url) => {
    const current = getBackgroundUrl(url);
    return (
    <div className="aspect-ratio-box"
        style={{
            paddingTop: "20%",
            background: current,
            backgroundSize: "cover"   
        }}
    ></div>
)}

class CommentModal extends React.Component {
    state = {
        visible: false,
        loading: false
    }
    renderModal(){
        return (
            <Modal
                visible={this.state.visible}
                title="Type Your Comments"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="back" onClick={this.handleCancel}>Return</Button>,
                    <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                    Submit
                    </Button>,
                ]}
                >
                <p>You get to type your bloody comments here</p>
            </Modal>
        )
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }
    
    render(){
        const { children } = this.props;
        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, { showModal: this.showModal })
        );
        return (
            <div>
                {this.renderModal()}
                { childrenWithProps }
            </div>
        )
    }
}




export const LikeAction = (pid, token) => {
    // This is the Like Action for the Nubit Card
    // Put post id into the prop
    
    
    return (
        <LikePopOver pid={pid} token={token}>
            <Icon type="heart" />
        </LikePopOver>
        
    )
}

export const ChildIcon = ({showModal}) =>{
    return (
        <Icon type="message" onClick={()=> showModal()}/>
    )
}

export const CommentAction = (pid, token) => {
    return (
        <CommentModal>
            <ChildIcon/>
        </CommentModal>
    )
}

class LikePopOver extends React.Component {
    state = {
      visible: false,
    }
  
    hide = () => {
      this.setState({
        visible: false,
      });
    }

    like = () => {
        // console.log();
        if(this.props.token !== false){
            console.log(this.props.token)
            // message.success(`Token Exist ${this.props.token}`)
            instance.defaults.headers.common['Authorization'] = `Bearer ${this.props.token}`
            instance.post('/post/vote', {"post-id": this.props.pid}).then((res)=>{
                message.success("Successfully Liked post")
            }).catch((err)=>{
                // console.log(err.response.data.msg)
                message.error("Couldn't like post", 1.5).then(()=>{
                    message.info(err.response.data.msg, 1.5)
                })
            })

        }
        // message.success("You liked a post. And paid ... " + this.props.pid)
        this.setState({
            visible: false,
        });
    }

    handleVisibleChange = (visible) => {
      this.setState({ visible });
    }

    selectMenu(){
        return (
            <div>            
                <Select defaultValue="0.05" style={{ width: '100%' }}>
                    <Option value="0.0">0.00 BCH</Option>
                    <Option value="0.01">0.01 BCH</Option>
                    <Option value="0.05">0.05 BCH</Option>
                    <Option value="0.07">0.07 BCH</Option>
                    <Option value="0.10">0.10 BCH</Option>
                </Select>
            </div>
        );
        
    }

    decideContent(){
        return (
            <div>
                {this.selectMenu()}
                <Row style={{paddingTop: '0.1rem'}}>
                    <Col span={12}>
                        <a onClick={this.hide}>Close</a>
                    </Col>
                    <Col span={12}>
                        <a onClick={this.like}>Like</a>
                    </Col>
                </Row>
                
                <br/>
                
            </div>
            
        );
    }
  
    render() {
      return (
        <Popover
          content={this.decideContent()}
          placement="topLeft"
          title="Choose How Much"
          trigger="click"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
        >
          {this.props.children}
        </Popover>
      );
    }
  }
  
  



export class NubitCards extends PureComponent {
    enterPost = () => {
        // const self = this;
        const {_history, _pid } = this.props;
        // console.log(this.props);
        this.props.history.push("/post/"+_pid)
        // I should be getting the post and moving it accordingly
        // this.setState({ loading: true });
    }    
    render(){
        const {url, _avatar, _title, _description, _pid, _token, _maintag} = this.props;
        return (
            <div>
                {/* <CommentModal/> */}
                <Card
                    style={{ width: "100%", marginBottom:"1rem" }}
                    cover={NubitCover(url, this.enterPost)}
                    actions={[LikeAction(_pid, _token), CommentAction(_pid, _token)]}
                    
                    hoverable
                >
                {/* Add the click to the meta content (individually) and  */}
                    <Meta
                    avatar={<Avatar src={_avatar} />}
                    title={_title}
                    onClick={this.enterPost}
                    description={
                        <div>
                            <p>{_description}</p>
                            <Tag>{_maintag}</Tag>
                            <span><Icon type="dollar" /> 0</span>
                        </div>
                    }
                    />
                </Card>
        </div>
      )
    }
}

export const NubitCard = withRouter(NubitCards);