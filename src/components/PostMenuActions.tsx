import { PiBookmarkSimpleLight, PiTrash } from "react-icons/pi";

const PostMenuActions = () => {
	return (
		<div>
			<h4 className="mt-8 mb-4 text-sm font-medium">Actions</h4>

			<div className="flex flex-col gap-4">
				<div className="flex gap-2 items-center text-sm cursor-pointer">
					<PiBookmarkSimpleLight size={20} />
					<span>Save this post</span>
				</div>

				<div className="flex gap-2 items-center text-sm cursor-pointer text-red-500">
					<PiTrash size={20} />
					<span>Delete this post</span>
				</div>
			</div>
		</div>
	);
};

export default PostMenuActions;
