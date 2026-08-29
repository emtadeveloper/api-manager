"use client";

import { useCallback, useState } from "react";

import { useAlert } from "./useAlert";
import { extractErrorMessage } from "@/utils/extract-error-message";

type ActionResult<T> =
  | { success: true; data?: T; [key: string]: unknown }
  | { success: false; error?: string; errors?: unknown };

interface UseServerActionOptions {
  successMessage?: string;
  fallbackErrorMessage?: string;
  showErrorAlert?: boolean;
}

export function useServerAction<TArgs extends unknown[], TResult>(
  action: (...args: TArgs) => Promise<ActionResult<TResult>>,
  options: UseServerActionOptions = {},
) {
  const { success, error } = useAlert();
  const [loading, setLoading] = useState(false);

  const { successMessage, fallbackErrorMessage = "خطایی رخ داد", showErrorAlert = true } = options;

  const run = useCallback(
    async (...args: TArgs): Promise<ActionResult<TResult> | null> => {
      setLoading(true);
      try {
        const result = await action(...args);

        if (!result.success) {
          if (showErrorAlert) {
            error(extractErrorMessage(result, fallbackErrorMessage));
          }
          return result;
        }

        if (successMessage) success(successMessage);
        return result;
      } catch (err) {
        if (showErrorAlert) {
          error(err instanceof Error ? err.message : fallbackErrorMessage);
        }
        return null;
      } finally {
        setLoading(false);
      }
    },
    [action, error, success, successMessage, fallbackErrorMessage, showErrorAlert],
  );

  return { run, loading };
}
