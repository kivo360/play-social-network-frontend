import React, { PureComponent } from 'react';
import { Card, Icon, Avatar } from 'antd';


const { Meta } = Card;

const getBackgroundUrl = (url) => {
    const endUrl = "url("+url+")"
    return endUrl;
}

export const NubitCover = (url) => {
    const current = getBackgroundUrl(url);
    return (
    <div className="aspect-ratio-box"
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


export class NubitCard extends PureComponent {
    enterPost = () => {
        const {_history, _pid } = this.props;
        _history.push("/post/"+_pid)
        // I should be getting the post and moving it accordingly
        // this.setState({ loading: true });
    }    
    render(){
        const {url, _avatar, _title, _description} = this.props;
        return (
            <div>
                <Card
                    style={{ width: "100%", marginBottom:"1rem" }}
                    cover={NubitCover(url)}
                    actions={[<Icon type="heart" />, <Icon type="message" />]}
                    onClick={this.enterPost}
                    hoverable
                >
                    <Meta
                    avatar={<Avatar src={_avatar} />}
                    title={_title}
                    description={
                        <div>
                            <p>{_description}</p>
                            <span><Icon type="dollar" /> 0</span>
                        </div>
                    }
                    />
                </Card>
        </div>
      )
    }
}

