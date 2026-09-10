"use client";

import { toast } from "react-toastify";
import { useMemo } from "react";

const useAlert = () =>
  useMemo(
    () => ({
      success: (content: string) => toast.success(content),
      error: (content: string) => toast.error(content),
      info: (content: string) => toast.info(content),
      warning: (content: string) => toast.warning(content),
    }),
    [],
  );

export default useAlert;
