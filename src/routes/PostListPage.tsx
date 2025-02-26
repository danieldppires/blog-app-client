import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";
import { useSearchParams } from "react-router-dom";

const PostListPage = () => {
	const [open, setOpen] = useState(false);

	const [searchParams] = useSearchParams();

	return (
		<div className="">
			<h1 className="mb-8 text-2xl">
				{searchParams.get("cat")?.toUpperCase() ?? "All Posts"}
			</h1>

			<button
				onClick={() => setOpen((prev) => !prev)}
				className="bg-cyan-600 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden"
			>
				{open ? "Close" : "Filter or Search"}
			</button>

			<div className="flex flex-col-reverse gap-8 md:flex-row">
				<div className="">
					<PostList />
				</div>
				<div className={`${open ? "block" : "hidden"} md:block`}>
					<SideMenu />
				</div>
			</div>
		</div>
	);
};

export default PostListPage;
