import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Homepage = () => {
	return (
		<div className="mt-4 flex flex-col gap-4 md:mt-2 md:gap-2 md:text-sm">
			{/* BREADCRUMBS */}
			<div className="flex gap-4">
				<Link to="/">Home</Link>
				<span>·</span>
				<span className="text-cyan-600">Blogs and Articles</span>
			</div>

			{/* INTRODUCTION */}
			<div className="flex items-center justify-between">
				{/* titles */}
				<div className="">
					<h1 className="text-gray-800 text-2xl md:text-4xl lg:text-5xl font-bold">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					</h1>
					<p className="mt-8 text-base md:text-lg">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quos
						impedit.
					</p>
				</div>

				{/* animated button */}
				<Link to="write" className="relative hidden md:block">
					<svg
						viewBox="0 0 200 200"
						width="200"
						height="200"
						className="text-lg tracking-widest animate-spin animatedButton"
					>
						<path
							id="circlePath"
							fill="none"
							d="M 100, 100 m -75, 0 a 75, 75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
						/>
						<text>
							<textPath href="#circlePath" startOffset="0%">
								Write your story
							</textPath>
							<textPath href="#circlePath" startOffset="43%">
								·
							</textPath>
							<textPath href="#circlePath" startOffset="50%">
								Share your ideas
							</textPath>
							<textPath href="#circlePath" startOffset="93%">
								·
							</textPath>
						</text>
					</svg>
					<button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="50"
							height="50"
							fill="none"
							stroke="white"
							strokeWidth="2"
						>
							<line x1="6" y1="18" x2="18" y2="6" />
							<polyline points="9 6 18 6 18 15" />
						</svg>
					</button>
				</Link>
			</div>

			<MainCategories />
			<FeaturedPosts />

			<div className="">
				<h3 className="my-8 md:my-12 text-2xl text-gray-600">Recent Posts</h3>
				<PostList />
			</div>
		</div>
	);
};

export default Homepage;
