import { Link } from "react-router-dom";
import Search from "./Search";

const SideMenu = () => {
	return (
		<div className="px-4 h-max sticky top-8">
			<h2 className="mb-4 text-sm font-medium">Search</h2>
			<Search />

			<h2 className="mt-8 mb-4 text-sm font-medium">Filters</h2>
			<div className="flex flex-col gap-2 text-sm">
				<label htmlFor="" className="flex items-center gap-2 cursor-pointer">
					<input
						type="radio"
						name="sort"
						value="newest"
						className="appearance-none w-4 h-4 border-2 bg-white border-cyan-600 cursor-pointer rounded-sm checked:bg-cyan-600"
					/>
					Newest
				</label>

				<label htmlFor="" className="flex items-center gap-2 cursor-pointer">
					<input
						type="radio"
						name="sort"
						value="popular"
						className="appearance-none w-4 h-4 border-2 bg-white border-cyan-600 cursor-pointer rounded-sm checked:bg-cyan-600"
					/>
					Most Popular
				</label>

				<label htmlFor="" className="flex items-center gap-2 cursor-pointer">
					<input
						type="radio"
						name="sort"
						value="trending"
						className="appearance-none w-4 h-4 border-2 bg-white border-cyan-600 cursor-pointer rounded-sm checked:bg-cyan-600"
					/>
					Trending
				</label>

				<label htmlFor="" className="flex items-center gap-2 cursor-pointer">
					<input
						type="radio"
						name="sort"
						value="oldest"
						className="appearance-none w-4 h-4 border-2 bg-white border-cyan-600 cursor-pointer rounded-sm checked:bg-cyan-600"
					/>
					Oldest
				</label>
			</div>

			<h2 className="mt-8 mb-4 text-sm font-medium">Categories</h2>
			<div className="flex flex-col gap-2 text-sm">
				<Link to="/posts" className="underline">
					All
				</Link>
				<Link to="/posts?cat=web-design" className="underline">
					Web Design
				</Link>
				<Link to="/posts?cat=development" className="underline">
					Development
				</Link>
				<Link to="/posts?cat=databases" className="underline">
					Databases
				</Link>
				<Link to="/posts?cat=seo" className="underline">
					Search Engines
				</Link>
				<Link to="/posts?cat=marketing" className="underline">
					Marketing
				</Link>
			</div>
		</div>
	);
};

export default SideMenu;
