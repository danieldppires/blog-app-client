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
			<div className="w-full lg:w-1/2 flex flex-col gap-4">
				{/* Second */}
				<div className="lg:h-1/3 flex justify-between gap-4">
					<Image
						src="featured2.jpeg"
						className="rounded-3xl object-cover w-1/3 aspect-video"
					/>
					{/* details and title*/}
					<div className="w-2/3">
						{/* details */}
						<div className="flex items-center gap-4 text-sm mb-4">
							<h2 className="font-semibold">02.</h2>
							<Link to="/" className="text-cyan-600">
								Development
							</Link>
							<span className="text-gray-500 text-xs">2 days ago</span>
						</div>
						<Link
							to="/test"
							className="text-base sm:text-lg md:text-xl font-medium"
						>
							Officiis cupiditate maxime ipsum odit! Perspiciatis hic nemo
							inventore?
						</Link>
					</div>
				</div>

				{/* Third */}
				<div className="lg:h-1/3 flex justify-between gap-4">
					<Image
						src="featured3.jpeg"
						className="rounded-3xl object-cover w-1/3 aspect-video"
					/>
					{/* details and title*/}
					<div className="w-2/3">
						{/* details */}
						<div className="flex items-center gap-4 text-sm mb-4">
							<h2 className="font-semibold">03.</h2>
							<Link to="/" className="text-cyan-600">
								Web Design
							</Link>
							<span className="text-gray-500 text-xs">2 days ago</span>
						</div>
						<Link
							to="/test"
							className="text-base sm:text-lg md:text-xl font-medium"
						>
							Voluptate enim debitis porro nobis iure corrupti mollitia
							assumenda.
						</Link>
					</div>
				</div>

				{/* Fourth */}
				<div className="lg:h-1/3 flex justify-between gap-4">
					<Image
						src="featured4.jpeg"
						className="rounded-3xl object-cover w-1/3 aspect-video"
					/>
					{/* details and title*/}
					<div className="w-2/3">
						{/* details */}
						<div className="flex items-center gap-4 text-sm mb-4">
							<h2 className="font-semibold">04.</h2>
							<Link to="/" className="text-cyan-600">
								Search Engines
							</Link>
							<span className="text-gray-500 text-xs">2 days ago</span>
						</div>
						<Link
							to="/test"
							className="text-base sm:text-lg md:text-xl font-medium"
						>
							Aliquid voluptate saepe quod quis neque assumenda mollitia eaque
							harum adipisci cum. Nobis.
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedPosts;
