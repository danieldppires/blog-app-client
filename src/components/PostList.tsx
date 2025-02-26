import PostListItem from "./PostListItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";

const fetchPosts = async ({
	pageParam,
	searchParams,
}: {
	pageParam: number;
	searchParams: URLSearchParams;
}) => {
	const searchParamsObj = Object.fromEntries([...searchParams]);

	const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
		params: { page: pageParam, limit: 10, ...searchParamsObj },
	});

	return res.data;
};

const PostList = () => {
	const [searchParams] = useSearchParams();
	const searchParamsObj = Object.fromEntries([...searchParams]);

	const { data, error, fetchNextPage, hasNextPage, isLoading } =
		useInfiniteQuery({
			queryKey: ["posts", searchParamsObj],
			queryFn: ({ pageParam = 1 }) => fetchPosts({ pageParam, searchParams }),
			initialPageParam: 1,
			getNextPageParam: (lastPage, pages) =>
				lastPage.hasMore ? pages.length + 1 : undefined,
		});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Erro ao carregar os dados</p>;

	const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

	return (
		<InfiniteScroll
			dataLength={allPosts.length}
			next={fetchNextPage}
			hasMore={!!hasNextPage}
			loader={<h4>Loading more posts...</h4>}
			endMessage={
				<p>
					<b>All posts loaded!</b>
				</p>
			}
		>
			{allPosts.map((post) => (
				<PostListItem key={post._id} post={post} />
			))}
		</InfiniteScroll>
	);
};

export default PostList;
