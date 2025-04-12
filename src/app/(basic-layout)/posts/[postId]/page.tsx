const Page = async ({ params }: { params: Promise<{ postId: string }> }) => {
  const { postId } = await params;
  return <div>page:{postId}</div>;
};

export default Page;
