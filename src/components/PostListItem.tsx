import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
	return (
		<div className="flex flex-col xl:flex-row gap-8">
			<div className="md:hidden xl:block xl:w-1/3">
				<Image
					src="postImg.jpeg"
					className="rounded-2xl object-cover"
					w="735"
				/>
			</div>

			{/* details */}
			<div className="flex flex-col gap-4 xl:w-2/3">
				<Link to="/posts/test" className="text-2xl md:text-3xl font-semibold">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magnam
					autem voluptatem, cum sit enim tempora.
				</Link>

				<div className="flex items-center gap-2 text-gray-400 text-sm">
					<span>Written by</span>
					<Link to="/posts/test" className="text-cyan-600">
						John Doe
					</Link>
					<span>on</span>
					<Link to="/posts/test" className="text-cyan-600">
						Web Design
					</Link>
					<span>2 days ago</span>
				</div>

				<p className="">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
					perferendis, quidem aspernatur amet sit voluptate officia, quod illum
					similique corporis facere aut expedita cupiditate molestias nostrum,
					laudantium eaque harum dolorum.
				</p>

				<Link to="/posts/test" className="text-cyan-600 underline text-xs">
					Read More
				</Link>
			</div>
		</div>
	);
};

export default PostListItem;
