import { MyPosts } from "@/components/templates/MyPosts";
import { myPostsResponseMock } from "@/mocks/myPost";

const Page = () => {
  return <MyPosts posts={myPostsResponseMock} />;
};

export default Page;
