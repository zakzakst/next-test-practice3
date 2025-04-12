import type { Post } from "@/types/Post";
import { Props as PaginationInfoProps } from "@/components/atoms/PaginationInfo";
import { PaginationProps } from "@/lib/util/pagination";

export type PostsResponse = {
  posts: Post[];
  pagination: PaginationProps;
  paginationInfo: PaginationInfoProps;
};
