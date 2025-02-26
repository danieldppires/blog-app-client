import { useSearchParams } from "react-router-dom";
import Search from "./Search";

const SideMenu = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newSortValue = event.target.value;
		const currentSortValue = searchParams.get("sort");

		if (currentSortValue !== newSortValue) {
			setSearchParams({
				...Object.fromEntries(searchParams.entries()),
				sort: event.target.value,
			});
		}
	};

	const handleCategoryChange = (category: string) => {
		const newCategoryValue = category;
		const currentCategoryValue = searchParams.get("cat");

		if (currentCategoryValue !== newCategoryValue) {
			setSearchParams({
				...Object.fromEntries(searchParams.entries()),
				cat: category,
			});
		}
	};

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
						onChange={handleFilterChange}
						value="newest"
						className="appearance-none w-4 h-4 border-2 bg-white border-cyan-600 cursor-pointer rounded-sm checked:bg-cyan-600"
					/>
					Newest
				</label>

				<label htmlFor="" className="flex items-center gap-2 cursor-pointer">
					<input
						type="radio"
						name="sort"
						onChange={handleFilterChange}
						value="popular"
						className="appearance-none w-4 h-4 border-2 bg-white border-cyan-600 cursor-pointer rounded-sm checked:bg-cyan-600"
					/>
					Most Popular
				</label>

				<label htmlFor="" className="flex items-center gap-2 cursor-pointer">
					<input
						type="radio"
						name="sort"
						onChange={handleFilterChange}
						value="trending"
						className="appearance-none w-4 h-4 border-2 bg-white border-cyan-600 cursor-pointer rounded-sm checked:bg-cyan-600"
					/>
					Trending
				</label>

				<label htmlFor="" className="flex items-center gap-2 cursor-pointer">
					<input
						type="radio"
						name="sort"
						onChange={handleFilterChange}
						value="oldest"
						className="appearance-none w-4 h-4 border-2 bg-white border-cyan-600 cursor-pointer rounded-sm checked:bg-cyan-600"
					/>
					Oldest
				</label>
			</div>

			<h2 className="mt-8 mb-4 text-sm font-medium">Categories</h2>
			<div className="flex flex-col gap-2 text-sm">
				<span
					className="underline cursor-pointer"
					onClick={() => {
						handleCategoryChange("general");
					}}
				>
					All
				</span>

				<span
					className="underline cursor-pointer"
					onClick={() => {
						handleCategoryChange("web-design");
					}}
				>
					Web Design
				</span>

				<span
					className="underline cursor-pointer"
					onClick={() => {
						handleCategoryChange("development");
					}}
				>
					Development
				</span>

				<span
					className="underline cursor-pointer"
					onClick={() => {
						handleCategoryChange("databases");
					}}
				>
					Databases
				</span>

				<span
					className="underline cursor-pointer"
					onClick={() => {
						handleCategoryChange("seo");
					}}
				>
					Search Engines
				</span>

				<span
					className="underline cursor-pointer"
					onClick={() => {
						handleCategoryChange("marketing");
					}}
				>
					Marketing
				</span>
			</div>
		</div>
	);
};

export default SideMenu;
