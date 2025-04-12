import type { MyPost } from "@/types/MyPost";
import { Props as PaginationInfoProps } from "@/components/atoms/PaginationInfo";
import { PaginationProps } from "@/lib/util/pagination";

export type MyPostsResponse = {
  posts: MyPost[];
  pagination: PaginationProps;
  paginationInfo: PaginationInfoProps;
};
