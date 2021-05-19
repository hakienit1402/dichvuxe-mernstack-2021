import React from "react";
import "./auth.css";
import { Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
  KeyOutlined,
  FacebookFilled,
  GooglePlusSquareFilled,
} from "@ant-design/icons";

const Register = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div
      className="loginpage"
      style={{ backgroundColor: "lightgray" }}
    >
      <div className="d-flex justify-content-center h-100">
        <div className="card-register">
          <div className="card-header">
            <a>ĐĂNG KÝ</a>
          </div>
          <hr/>
          <div className="card-body">
            <Form
              name="normal_login"
              className="login-form formlogin"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                className="input-group form-group"
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Fullname"
                />
              </Form.Item>
              <Form.Item
                className="input-group form-group"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                className="input-group form-group"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
                className="input-group form-group"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item className="input-group form-group">
                <p className="login-form-forgot forgot" href="">
                Đã có tài khoản <a href="">đăng nhập ngay!</a>
                </p>
                {/* <div style={{ color: "#fff", fontSize: 16 }}>
                  
                </div> */}
                <Button
                  type="default"
                  htmlType="submit"
                  className="login-form-button btn float-right login_btn"
                >
                
                Đăng ký
                </Button>
              </Form.Item>
              
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
