import { Button, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import InputSearch from "./navComponents/InputSearch";
import {  Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
const AuthNav = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="header">
      <Link to='/'>
      <div className="logo" />
      </Link>
        <Menu className="menu">
          <Menu.Item key="1">    
              Đăng kí đối tác
          </Menu.Item>
          <Menu.Item key="2">
              Liên hệ
          </Menu.Item>
          <Menu.Item key="3">
          <InputSearch />
          </Menu.Item>
          <Menu.Item key="login">    
            <Link to="/login">     
          Đăng nhập
           </Link>
          </Menu.Item>
          <Menu.Item key="register">
          <Link to="/register">
          Đăng kí
      </Link>
          </Menu.Item>
          <Menu.Item key="5">
          <Badge
      count={0}
      showZero
      style={{ backgroundColor: "red", color: "#fff", fontWeight: "bold" }}
    >
     
        <ShoppingCartOutlined style={{fontSize:25,color:'black'}}/>
    </Badge>
          </Menu.Item>
        </Menu>
    </div>
  );
};

export default AuthNav;
