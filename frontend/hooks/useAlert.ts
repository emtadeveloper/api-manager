"use client";

import { App } from "antd";
import { useMemo } from "react";

const useAlert = () => {
  const { message } = App.useApp();

  return useMemo(
    () => ({
      success: (content: string) => message.success(content),
      error: (content: string) => message.error(content),
      info: (content: string) => message.info(content),
      warning: (content: string) => message.warning(content),
    }),
    [message],
  );
};

export default useAlert;
