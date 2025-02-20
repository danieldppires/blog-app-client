import { IoSearch } from "react-icons/io5";

const Search = () => {
	return (
		<div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
			<IoSearch className="text-gray-400" />
			<input
				type="text"
				placeholder="search a post..."
				className="bg-transparent outline-0 text-sm"
			/>
		</div>
	);
};

export default Search;
