import React, { PureComponent } from 'react';
import { Skeleton, List, Switch, Row, Col, Card, Icon, Avatar } from 'antd';
import { Form, Input, Tooltip, Cascader, Select,  Checkbox, Button, AutoComplete } from 'antd';

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




export class NubitCard extends PureComponent {
    
    render(){
        const {url, _avatar, _title, _description} = this.props;
        return (
            <div>
                <Card
                    style={{ width: "100%", marginBottom:"1rem" }}
                    cover={NubitCover(url)}
                    actions={[<Icon type="heart" />, <Icon type="message" />]}
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