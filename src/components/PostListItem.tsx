import { Link } from "react-router-dom";
import Image from "./Image";
import { format } from "timeago.js";

interface Props {
	post: {
		user: { username: string };
		img: string;
		title: string;
		desc: string;
		slug: string;
		category: string;
		createdAt: Date;
	};
}

const PostListItem = ({ post }: Props) => {
	return (
		<div className="flex flex-col xl:flex-row gap-8 mb-12">
			{post.img && (
				<div className="md:hidden xl:block xl:w-1/3">
					<Link to={`/posts/${post.slug}`}>
						<Image
							src={post.img}
							className="rounded-2xl object-cover aspect-video"
							w="735"
						/>
					</Link>
				</div>
			)}

			{/* details */}
			<div className="flex flex-col gap-4 xl:w-2/3">
				<Link
					to={`/posts/${post.slug}`}
					className="text-2xl md:text-3xl font-semibold"
				>
					{post.title}
				</Link>

				<div className="flex items-center gap-2 text-gray-400 text-sm">
					<span>Written by</span>
					<Link
						to={`/posts?author=${post.user.username}`}
						className="text-cyan-600"
					>
						{post.user?.username}
					</Link>
					<span>on</span>
					<Link to={`/posts?cat=${post.category}`} className="text-cyan-600">
						{post.category}
					</Link>
					<span>{format(post.createdAt)}</span>
				</div>

				<p className="">{post.desc}</p>

				<Link
					to={`/posts/${post.slug}`}
					className="text-cyan-600 underline text-xs"
				>
					Read More
				</Link>
			</div>
		</div>
	);
};

export default PostListItem;
