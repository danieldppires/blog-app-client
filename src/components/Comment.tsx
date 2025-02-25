import { format } from "timeago.js";
import Image from "./Image";

interface Props {
	comment: {
		desc: string;
		user: { username: string; img: string };
		createdAt: Date;
	};
}

const Comment = ({ comment }: Props) => {
	return (
		<div className="p-4 bg-slate-50 rounded-xl mb-8">
			<div className="flex items-center gap-4">
				{comment.user.img && (
					<Image
						src={comment.user.img}
						className="w-10 h-10 rounded-full object-cover"
						w="40"
					/>
				)}
				<span className="text-sm font-medium">{comment.user.username}</span>
				<span className="text-xs text-gray-500">
					{format(comment.createdAt)}
				</span>
			</div>

			<div className="mt-4">
				<p className="text-sm">{comment.desc}</p>
			</div>
		</div>
	);
};

export default Comment;
