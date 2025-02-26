import { format } from "timeago.js";
import Image from "./Image";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

interface Props {
	comment: {
		_id?: string;
		desc: string;
		user: { username: string; img: string };
		createdAt: Date;
	};
	postId: string;
}

const Comment = ({ comment, postId }: Props) => {
	const { user } = useUser();
	const { getToken } = useAuth();
	const role = user?.publicMetadata?.role;
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async () => {
			const token = await getToken();
			const response = await axios.delete(
				`${import.meta.env.VITE_API_URL}/comments/${comment._id}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["comments", postId] });
			toast.success("Comment deleted");
		},
		onError: (error: any) => {
			const errorMessage = error.response?.data || "An error occurred";
			toast.error(errorMessage);
		},
	});

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

				{user &&
					(comment.user.username === user.username || role === "admin") && (
						<span
							className="text-xs text-red-300 hover:text-red-500 cursor-pointer"
							onClick={() => mutation.mutate()}
						>
							delete
							{mutation.isPending && <span>(in progress...)</span>}
						</span>
					)}
			</div>

			<div className="mt-4">
				<p className="text-sm">{comment.desc}</p>
			</div>
		</div>
	);
};

export default Comment;
