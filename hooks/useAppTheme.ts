"use client";

import { theme } from "antd";

export function useAppTheme() {
  const { token } = theme.useToken();
  return token;
}
