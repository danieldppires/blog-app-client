import Comment from "./Comment";

const Comments = () => {
	return (
		<div className="flex flex-col gap-8 lg:w-3/5">
			<h3 className="text-lg text-gray-500 underline">Comments</h3>

			<div className="flex items-center justify-between gap-8 w-full">
				<textarea
					placeholder="Write a comment..."
					className="w-full p-4 text-sm rounded-xl bg-slate-50 outline-cyan-600"
				/>
				<button className="bg-cyan-600 px-4 py-3 text-white font-medium rounded-xl text-sm">
					Send
				</button>
			</div>

			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
		</div>
	);
};

export default Comments;
