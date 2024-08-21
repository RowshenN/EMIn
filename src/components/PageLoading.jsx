import React from "react";
import { Flex, Spin } from "antd";

const PageLoading = () => {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 z-[1000] bg-white flex items-center justify-center">
      <Flex align="center" gap="middle">
        <Spin size="large" />
      </Flex>
    </div>
  );
};

export default PageLoading;
