import React from 'react'
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
import moto from "../images/icon-motorbike.jpg";
import car from "../images/car.png";
const TypeRadio = () => {
    return (
        <Radio.Group
                      defaultValue="a"
                      size="large"
                      className="type-radio-body"
                    >
                      <Radio.Button value="car" className="type-radio">
                        <img
                          src={car}
                          alt="#"
                          style={{ width: 20, height: 20 }}
                        />
                        Ô tô
                      </Radio.Button>
                      <Radio.Button value="moto" className="type-radio">
                        <img
                          src={moto}
                          alt="#"
                          style={{ width: 20, height: 20 }}
                        />
                        Xe máy
                      </Radio.Button>
                    </Radio.Group>
    )
}

export default TypeRadio
