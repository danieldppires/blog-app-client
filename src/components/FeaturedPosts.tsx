import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts = () => {
	return (
		<div className="mt-8 flex flex-col lg:flex-row gap-8">
			{/* First */}
			<div className="w-full lg:w-1/2 flex flex-col gap-4">
				<Image src="featured1.jpeg" className="rounded-3xl object-cover" />

				<div className="flex items-center gap-4">
					<h2 className="font-semibold text-sm lg:text-base">01.</h2>
					<Link to="/" className="text-cyan-600 text-sm lg:text-base">
						Web Design
					</Link>
					<span className="text-gray-500 text-sm">2 days ago</span>
				</div>

				<Link
					to="/test"
					className="text-xl lg:text-3xl font-semibold lg:font-bold"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</Link>
			</div>
			{/* Others */}
			<div className="w-full lg:w-1/2 flex flex-col gap-4"></div>
		</div>
	);
};

export default FeaturedPosts;
