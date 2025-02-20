import Image from "./Image";

const Comment = () => {
	return (
		<div className="p-4 bg-slate-50 rounded-xl mb-8">
			<div className="flex items-center gap-4">
				<Image
					src="userImg.jpeg"
					className="w-10 h-10 rounded-full object-cover"
					w="40"
				/>
				<span className="text-sm font-medium">John Doe</span>
				<span className="text-xs text-gray-500">2 days ago</span>
			</div>

			<div className="mt-4">
				<p className="text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
					officiis deleniti corrupti iure, hic cum excepturi est cupiditate
					ipsa, consequatur illo alias eos ea, a iusto eaque? Laborum, debitis
					ea!
				</p>
			</div>
		</div>
	);
};

export default Comment;
