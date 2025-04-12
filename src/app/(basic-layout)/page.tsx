import { Posts } from "@/components/templates/Posts";
import { postsResponseMock } from "@/mocks/post";

const Page = () => {
  return <Posts {...postsResponseMock} />;
};

export default Page;
