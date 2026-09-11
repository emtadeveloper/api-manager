"use client";

import useNotificationStore from "@/stores/notification";

export function Notification() {
  const { notification } = useNotificationStore();

  if (!notification) return null;

  return (
    <div className="pointer-events-none fixed right-6 top-6 z-100" aria-live="assertive">
      <div
        className={`rounded-lg px-5 py-3 text-sm font-medium text-white shadow-lg ${
          notification.isSuccess ? "bg-green-600" : "bg-red-600"
        }`}
      >
        {notification.message}
      </div>
    </div>
  );
}
