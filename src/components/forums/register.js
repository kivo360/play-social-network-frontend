import { Button, Form, Icon, Input, Row, Col } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { registerUser } from '../../redux/actions/calls/user';

const FormItem = Form.Item;
  
class RegistrationForm extends React.Component {
    
    
    constructor(props){
      super(props);
      this.state = {
        confirmDirty: false,
        autoCompleteResult: [],
      };
      console.log(props);
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values);
          this.props.register(values);
          // Dispatch register action from here.
        }
      });
    }
  
    handleConfirmBlur = (e) => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
  
    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter are not the same!');
      } else {
        callback();
      }
    }
  
    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    }
  
    
  
    render() {
      const { getFieldDecorator } = this.props.form;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Row gutter={16}>
          <Col span={24}>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          </Col>
          <Col span={24}>
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email' }],
              })(
                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
              )}
            </FormItem>
          </Col>
          <Col span={10}>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          </Col>
          <Col span={10}>
          <FormItem>
            {getFieldDecorator('confirm', {
              rules: [{ required: true, message: 'Please input your confirmation password!' }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm" />
            )}
          </FormItem>
          </Col>
          <Col span={4}>
          <FormItem>
            {getFieldDecorator('pin', {
              rules: [{ required: true, message: 'Please input your Pin Number!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Pin" />
            )}
          </FormItem>
          </Col>
          <Col span={24}>
          <Button type="primary" htmlType="submit" className="login-form-button" block>
              Register
            </Button>
          </Col>
        </Row>
        </Form>
      );
    }
  }
  
const WrappedRegistrationForm = Form.create()(RegistrationForm);


const mapStateToProps = state => ({
  ...state
});




const mapDispatchToProps = dispatch => ({
  register: bindActionCreators(registerUser, dispatch)
});




//  const mapDispatchToProps = dispatch => ({
//   getUser: () => dispatch(getUser())
//  })

const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm)
const RouteApp = withRouter(ConnectApp)

export default RouteApp;

// export default WrappedRegistrationForm;