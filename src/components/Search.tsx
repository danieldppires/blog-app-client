import { IoSearch } from "react-icons/io5";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			const query = event.currentTarget.value.trim();
			if (!query) return;

			if (location.pathname === "/posts") {
				const newParams = new URLSearchParams(searchParams);
				newParams.set("search", query);
				setSearchParams(newParams);
			} else {
				navigate(`/posts?search=${query}`);
			}
		}
	};

	return (
		<div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
			<IoSearch className="text-gray-400" />
			<input
				type="text"
				placeholder="Search a post..."
				className="bg-transparent outline-0 text-sm"
				onKeyDown={handleKeyPress}
			/>
		</div>
	);
};

export default Search;
