"use client";

import { parseAsPositiveInt } from "@/lib/util";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Props } from "./";

export const useLikeButton = ({
  likeCount,
  liked,
  isMyPost,
  isLoggedIn,
}: Props) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [localLikeCount, setLocalLikeCount] = useState(likeCount);
  const params = useParams();
  const { handleSubmit, formState } = useForm();
  const postId = Number(parseAsPositiveInt(params.postId));
  const isDisabled =
    formState.isSubmitting || isLiked || isMyPost || !isLoggedIn;
  const onSubmit = handleSubmit(async () => {
    console.log(postId);
    setIsLiked(true);
    setLocalLikeCount((prev) => prev + 1);
  });
  return { isLiked, isDisabled, localLikeCount, onSubmit };
};
