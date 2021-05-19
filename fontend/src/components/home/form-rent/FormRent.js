import React from "react";
import "../../../pages/home/home.css";
import {
  Affix,
  Collapse,
  Form,
  Button,
  Radio,
  Select,
  Input,
  DatePicker,
  Space,
} from "antd";
import { CaretRightOutlined, CarFilled } from "@ant-design/icons";
import rent from "../images/rent-icon.png";
import MySelecter from "./MySelecter";
import TypeRadio from "./TypeRadio";
const { Panel } = Collapse;
const { Option } = Select;
const { RangePicker } = DatePicker;
const FormRent = () => {
  return (
    <Affix
      offsetTop={120}
      style={{ position: "absolute", top: 39, right: 100 }}
    >
      {/* <div className="card-form"></div> */}
      <Collapse
        defaultActiveKey={["1"]}
        ghost
        style={{ marginTop: -48 }}
        expandIcon={({ isActive }) => (
          <img
            src={rent}
            alt="#"
            style={{ width: 100, height: 100, marginLeft: -50 }}
          />
        )}
      >
        <Panel key="1">
          <div className="card-form-rent">
            <div className="card-form-rent-title">
              <h2>Bạn muốn thuê xe?</h2>
            </div>
            <hr color="#fff" />
            <div className="card-body-form">
              <Form className="form-rent" size="large">
                <Space direction="vertical" size={-5}>
                  <Form.Item className="form-rent-items">
                    <TypeRadio />
                  </Form.Item>
                  <Form.Item className="form-rent-items">
                    <RangePicker showTime />
                  </Form.Item>
                  <Form.Item className="form-rent-items">
                    <MySelecter />
                  </Form.Item>
                  <Form.Item className="form-rent-items">
                    <MySelecter />
                  </Form.Item>
                  <Form.Item className="form-rent-items">
                    <MySelecter />
                  </Form.Item>
                  <Form.Item className="form-rent-items">
                    <Button
                      type="text"
                      htmlType="submit"
                      className="form-rent-btn"
                    >
                      Tìm xe giá tốt
                    </Button>
                  </Form.Item>
                </Space>
              </Form>
            </div>
          </div>
        </Panel>
      </Collapse>
    </Affix>
  );
};

export default FormRent;
