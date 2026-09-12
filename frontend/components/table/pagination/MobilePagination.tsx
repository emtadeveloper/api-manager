"use client";

import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface MobilePaginationProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  fetchNextPage: () => void;
  hasMore: boolean;
}

export default function MobilePagination<T>({
  items,
  renderItem,
  fetchNextPage,
  hasMore,
}: MobilePaginationProps<T>) {
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchNextPage}
      hasMore={hasMore}
      loader={
        <div className="flex justify-center py-4">
          <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-blue-500" />
        </div>
      }
      endMessage={
        <div className="py-4 text-center text-sm text-gray-400">
          همه‌ی موارد بارگذاری شده‌اند
        </div>
      }
      scrollableTarget="scrollableDiv"
      scrollThreshold={0.9}
    >
      {items.map((item, index) => (
        <div key={index}>{renderItem(item)}</div>
      ))}
    </InfiniteScroll>
  );
}
