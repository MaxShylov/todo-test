import React  from 'react';
import PropTypes from 'prop-types';
import Form from 'antd/lib/form';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';

import './LoginForm.scss'
import { ajax } from '../../api/ajax';
import { URL_LOGIN } from '../../api/routers';

const { shape, func } = PropTypes;


LoginForm.propTypes = {
  form: shape({
    validateFields: func.isRequired,
    getFieldDecorator: func.isRequired
  }).isRequired
};


export function LoginForm(props) {

  const { form: { validateFields, getFieldDecorator } } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    validateFields((err, values) => {
      if (!err) {
        ajax({
          url: URL_LOGIN,
          data: values,
          cb: (res) => loginSuccess(res.token)
        })
      }
    });
  };

  const loginSuccess = (token) => {
    localStorage.setItem('token', token);
    window.location.reload();
  };

  return (
    <Form onSubmit={handleSubmit} className="LoginForm">

      <h2>Login</h2>

      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }]
        })(
          <Input
            prefix={<Icon type="user" />}
            placeholder="Username"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your password!' }]
        })(
          <Input
            prefix={<Icon type="lock" />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Log in
      </Button>
    </Form>
  );
}


export default Form.create()(LoginForm);
