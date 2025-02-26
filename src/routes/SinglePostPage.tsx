import { Link, useParams } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";
import DOMPurify from "dompurify";

interface Post {
	_id: any;
	user: { username: string; img: string };
	img: string;
	title: string;
	desc: string;
	content: string;
	slug: string;
	category: string;
	createdAt: Date;
}

const fetchPost = async (slug: string) => {
	const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
	return res.data as Post;
};

const SinglePostPage = () => {
	const { slug } = useParams();

	const { isPending, error, data } = useQuery({
		queryKey: ["post", slug],
		queryFn: () => fetchPost(slug as string),
		enabled: !!slug, // Só executa a query se slug for válido (existir)
	});

	if (isPending) return <p>Loading...</p>;
	if (error) return <p>Something went wrong.</p>;

	return (
		<div className="flex flex-col gap-8">
			{/* detail */}
			<div className="flex gap-8">
				<div className="lg:w-3/5 flex flex-col gap-8">
					<h1 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
						{data.title}
					</h1>

					<div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
						<span>Written by</span>
						<Link to="/" className="text-cyan-600">
							{data.user.username}
						</Link>
						<span>on</span>
						<Link to="/" className="text-cyan-600">
							{data.category}
						</Link>
						<span>{format(data.createdAt)}</span>
					</div>

					<p className="text-gray-500 font-medium">{data.desc}</p>
				</div>

				{data.img && (
					<div className="hidden lg:block w-2/5">
						<Image
							src={data.img}
							w="600"
							className="rounded-3xl aspect-video object-cover"
						/>
					</div>
				)}
			</div>

			{/* content */}
			<div className="flex flex-col md:flex-row gap-8">
				{/* text */}
				<div
					className="flex flex-col gap-6 text-justify"
					dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.content) }}
				></div>

				{/* menu */}
				<div className="px-4 h-max sticky top-8 text-sm">
					<h4 className="mb-4 text-sm font-medium">Author</h4>

					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-6">
							{data.user.img && (
								<Image
									src={data.user.img}
									className="w-12 h-12 rounded-full object-cover"
									w="48"
									h="48"
								/>
							)}
							<Link to="/" className="text-cyan-600">
								{data.user.username}
							</Link>
						</div>
						<p className="text-xs text-gray-500">
							Lorem ipsum dolor sit amet consectetur
						</p>
						<div className="flex gap-2">
							<Link to="/">
								<Image src="facebook.svg" />
							</Link>
							<Link to="/">
								<Image src="instagram.svg" />
							</Link>
						</div>
					</div>

					<PostMenuActions post={data} />

					<h4 className="mt-8 mb-4 text-sm font-medium">Categories</h4>
					<div className="flex flex-col gap-2 text-sm">
						<Link to="" className="underline">
							All
						</Link>
						<Link to="" className="underline">
							Web Design
						</Link>
						<Link to="" className="underline">
							Development
						</Link>
						<Link to="" className="underline">
							Databases
						</Link>
						<Link to="" className="underline">
							Search Engines
						</Link>
						<Link to="" className="underline">
							Marketing
						</Link>
					</div>

					<h4 className="mt-8 mb-4 text-sm font-medium">Search</h4>
					<Search />
				</div>
			</div>

			<Comments postId={data._id} />
		</div>
	);
};

export default SinglePostPage;
