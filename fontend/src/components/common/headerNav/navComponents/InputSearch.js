import React from "react";
import { Input } from "antd";
const { Search } = Input;
const InputSearch = () => {
  const onSearch = (value) => console.log(value);
  return (
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      size="large"
      className="search-input"
    />
  );
};

export default InputSearch;
