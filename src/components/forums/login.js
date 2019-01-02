import { Button, Form, Icon, Input } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router-dom';
import { loginUser, refreshUser } from '../../redux/actions/calls/user';

const FormItem = Form.Item;
  
class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
          this.props.login(values);
        }
      });
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            
            {/* <a className="login-form-forgot" href="">Forgot password</a> */}
            <Button type="primary" htmlType="submit" className="login-form-button" block>
              Log in
            </Button>
          </FormItem>
        </Form>
      );
    }
  }
  
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);


const mapStateToProps = state => ({
  ...state
});




const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(loginUser, dispatch),
  // refresh: bindActionCreators(refreshUser, dispatch)

});




//  const mapDispatchToProps = dispatch => ({
//   getUser: () => dispatch(getUser())
//  })

const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm)
const RouteApp = withRouter(ConnectApp)

export default RouteApp;

// export default WrappedNormalLoginForm;