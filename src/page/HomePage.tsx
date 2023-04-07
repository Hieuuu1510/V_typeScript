import React from "react";
import { Button, Space } from "antd";
const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <Space wrap>
        <a href="/signin">
          <Button type="primary">Đăng nhập</Button>
        </a>
        <a href="/signup">
          <Button type="primary">Đăng ký</Button>
        </a>
      </Space>
    </>
  );
};

export default HomePage;
