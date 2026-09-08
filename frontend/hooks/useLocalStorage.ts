// hooks/useLocalStorage.ts
import { useState, useCallback } from "react";

type SetValue<T> = (value: T | ((prev: T) => T)) => void;

function useLocalStorage<T>(
  key: string,
  initialValue: T,
): {
  value: T;
  setItem: SetValue<T>;
  getItem: () => T | null;
  removeItem: () => void;
  clear: () => void;
} {
  // مقدار اولیه را از localStorage می‌خوانیم (اگر موجود باشد)
  const readValue = useCallback((): T => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  }, [key, initialValue]);

  // state برای نگهداری مقدار فعلی
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // تابع SET
  const setItem = useCallback<SetValue<T>>(
    (value) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.warn(`Error setting localStorage key “${key}”:`, error);
      }
    },
    [key, storedValue],
  );

  // تابع GET (خواندن از localStorage و به‌روزرسانی state)
  const getItem = useCallback((): T | null => {
    try {
      const item = window.localStorage.getItem(key);
      const parsed = item ? (JSON.parse(item) as T) : null;
      if (parsed !== null) {
        setStoredValue(parsed);
      }
      return parsed;
    } catch (error) {
      console.warn(`Error getting localStorage key “${key}”:`, error);
      return null;
    }
  }, [key]);

  // تابع DELETE (حذف یک کلید خاص)
  const removeItem = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.warn(`Error removing localStorage key “${key}”:`, error);
    }
  }, [key, initialValue]);

  // تابع DELETE ALL (پاک کردن کامل localStorage)
  const clear = useCallback(() => {
    try {
      window.localStorage.clear();
      setStoredValue(initialValue);
    } catch (error) {
      console.warn(`Error clearing localStorage:`, error);
    }
  }, [initialValue]);

  return { value: storedValue, setItem, getItem, removeItem, clear };
}

export default useLocalStorage;
