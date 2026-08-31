"use client";

import { useCallback, useState } from "react";
import useAlert from "./useAlert";
import { extractErrorMessage } from "@/utils/extract-error-message";

interface ActionResult<T> {
  success: boolean;
  data?: T;
  error?: string;
  errors?: unknown;
}

interface UseServerActionOptions<T> {
  successMessage?: string;
  errorFallback?: string;
  onSuccess?: (data: T | undefined) => void;
}

export default function useServerAction<TArgs extends unknown[], TResult>(
  action: (...args: TArgs) => Promise<ActionResult<TResult>>,
  options: UseServerActionOptions<TResult> = {},
) {
  const alert = useAlert();
  const [loading, setLoading] = useState(false);

  const run = useCallback(
    async (...args: TArgs) => {
      setLoading(true);
      try {
        const result = await action(...args);

        if (!result.success) {
          alert.error(extractErrorMessage(result, options.errorFallback));
          return result;
        }

        if (options.successMessage) alert.success(options.successMessage);
        options.onSuccess?.(result.data);
        return result;
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [action],
  );

  return { run, loading };
}
