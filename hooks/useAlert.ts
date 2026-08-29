"use client";

import { App } from "antd";
import type { ModalFuncProps } from "antd";

export function useAlert() {
  const { message, notification, modal } = App.useApp();

  return {
    success: (content: string) => message.success(content),
    error: (content: string) => message.error(content),
    warning: (content: string) => message.warning(content),
    info: (content: string) => message.info(content),

    notify: (config: Parameters<typeof notification.open>[0]) => notification.open(config),

    confirm: (options: ModalFuncProps) =>
      modal.confirm({
        okText: "بله",
        cancelText: "خیر",
        title: "آیا مطمئن هستید؟",
        ...options,
      }),
  };
}
