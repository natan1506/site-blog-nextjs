import { BlogList, type BlogLisProps } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { GetStaticProps } from "next";

export default function BlogPage({ posts }: BlogLisProps) {
  return <BlogList posts={posts} />;
}

export const getStaticProps = (async () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return {
    props: {
      posts: sortedPosts,
    },
  };
}) satisfies GetStaticProps<BlogLisProps>; // satisfies added to ensure type safety
