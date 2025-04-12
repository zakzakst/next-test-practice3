import { Post } from "@/components/templates/Post";
import { postDetailMock } from "@/mocks/post";
import { userMock } from "@/mocks/user";

const Page = async ({ params }: { params: Promise<{ postId: string }> }) => {
  const { postId } = await params;
  return (
    <>
      <Post post={postDetailMock} user={userMock} />
      <p>{postId}</p>
    </>
  );
};

export default Page;
