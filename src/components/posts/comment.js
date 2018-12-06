import { Avatar, Card, Comment, Icon, Tooltip } from 'antd';
import moment from 'moment';
import React from 'react';

const { Meta } = Card;




export class PostComment extends React.Component {
    state = {
      likes: 0,
      dislikes: 0,
      action: null,
    }
  
    like = () => {
      this.setState({
        likes: 1,
        dislikes: 0,
        action: 'liked',
      });
    }
  
    dislike = () => {
      this.setState({
        likes: 0,
        dislikes: 1,
        action: 'disliked',
      });
    }
  
    render() {
      const { likes, dislikes, action } = this.state;
  
      const actions = [
        <span>
          <Tooltip title="Like">
            <Icon
              type="like"
              theme={action === 'liked' ? 'filled' : 'outlined'}
              onClick={this.like}
            />
          </Tooltip>
          <span style={{ paddingLeft: 8, cursor: 'auto' }}>
            {likes}
          </span>
        </span>,
        <span>
          <Tooltip title="Dislike">
            <Icon
              type="dislike"
              theme={action === 'disliked' ? 'filled' : 'outlined'}
              onClick={this.dislike}
            />
          </Tooltip>
          <span style={{ paddingLeft: 8, cursor: 'auto' }}>
            {dislikes}
          </span>
        </span>,
        <span>Reply to</span>,
      ];
      // Get a link for the user here
      // Get link content here from props
      // Get the date of the content here
      // Get the 
      return (
            <Comment
                actions={actions}
                author={<a>Han Solo</a>}
                avatar={(
                    <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                    />
                )}
                content={(
                    <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
                )}
                datetime={(
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                    </Tooltip>
                )}
            />
      );
    }
}
