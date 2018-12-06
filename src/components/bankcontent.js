import React from 'react';
import {PureComponent} from 'react';

import {Radio} from 'antd';
const RadioGroup = Radio.Group;
// Use to 

export class BankContent extends PureComponent {
    // Would pull user information from the user state
    state = {
      value: 1,
    }
  
    onChange = (e) => {
      console.log('radio checked', e.target.value);
      this.setState({
        value: e.target.value,
      });
    }
  
  
    render(){
      const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };
      return (
        <div>
          <RadioGroup onChange={this.onChange} value={this.state.value}>
            <Radio style={radioStyle} value={1}>Wells Fargo *1723</Radio>
            <Radio style={radioStyle} value={2}>American Express *1002</Radio>
          </RadioGroup>
          
        </div>
      )
    }
  }
  