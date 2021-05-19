import {
    Select
} from "antd";
import React from "react";
const { Option } = Select;
const MySelecter = () => {
    function onChange(value) {
        console.log(`selected ${value}`);
      }
      
      function onBlur() {
        console.log('blur');
      }
      
      function onFocus() {
        console.log('focus');
      }
      
      function onSearch(val) {
        console.log('search:', val);
      }
      
  return (
    <Select
      showSearch
      style={{ width: 340 }}
      placeholder="Chọn tỉnh thành"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="Ho Chi Minh">Ho Chi Minh</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="tom">Tom</Option>
    </Select>
  );
};

export default MySelecter;
