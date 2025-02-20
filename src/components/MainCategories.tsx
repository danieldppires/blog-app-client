import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const MainCategories = () => {
	return (
		<div
			className="flex bg-white rounded-full p-3 shadow-lg items-center 
			justify-center gap-6"
		>
			{/* links */}
			<div className="hidden flex-1 md:flex items-center flex-wrap">
				<Link
					to="/posts"
					className="bg-cyan-600 text-white rounded-full px-4 py-2 hover:bg-cyan-500"
				>
					All Posts
				</Link>
				<Link
					to="/posts?cat=web-design"
					className="hover:bg-cyan-50 rounded-full px-4 py-2"
				>
					Web Design
				</Link>
				<Link
					to="/posts?cat=development"
					className="hover:bg-cyan-50 rounded-full px-4 py-2"
				>
					Development
				</Link>
				<Link
					to="/posts?cat=databases"
					className="hover:bg-cyan-50 rounded-full px-4 py-2 hidden lg:block"
				>
					Databases
				</Link>
				<Link
					to="/posts?cat=seo"
					className="hover:bg-cyan-50 rounded-full px-4 py-2 hidden xl:block"
				>
					Search Engines
				</Link>
				<Link
					to="/posts?cat=marketing"
					className="hover:bg-cyan-50 rounded-full px-4 py-2 hidden 2xl:block"
				>
					Marketing
				</Link>
			</div>

			<span className="hidden md:block text-xl font-medium">|</span>

			{/* search */}
			<div className="w-full md:w-auto bg-gray-100 py-2 px-4 rounded-full flex items-center gap-2">
				<IoSearch className="text-gray-400" />
				<input
					type="text"
					placeholder="search a post..."
					className="bg-transparent outline-0 text-base"
				/>
			</div>
		</div>
	);
};

export default MainCategories;
