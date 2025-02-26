import axios from "axios";
import Comment from "./Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import { useState } from "react";

interface Props {
	postId: string;
}

const fetchComments = async (postId: string) => {
	const res = await axios.get(
		`${import.meta.env.VITE_API_URL}/comments/${postId}`
	);
	return res.data;
};

const Comments = ({ postId }: Props) => {
	const { user } = useUser();
	const { getToken } = useAuth();
	const queryClient = useQueryClient();
	const [commentText, setCommentText] = useState("");

	const { isPending, error, data } = useQuery({
		queryKey: ["comments", postId],
		queryFn: () => fetchComments(postId),
		enabled: !!postId,
	});

	const mutation = useMutation({
		mutationFn: async (newComment: { desc: string }) => {
			const token = await getToken();
			const response = await axios.post(
				`${import.meta.env.VITE_API_URL}/comments/${postId}`,
				newComment,
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
		},
		onError: (error: any) => {
			const errorMessage = error.response?.data || "An error occurred";
			toast.error(errorMessage);
		},
	});

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		if (!commentText.trim()) {
			toast.error("Comment cannot be empty.");
			return;
		}
		mutation.mutate({ desc: commentText });
		setCommentText(""); // Limpa o campo após envio
	};

	return (
		<div className="flex flex-col gap-8 lg:w-3/5 mb-12">
			<h3 className="text-lg text-gray-500 underline">Comments</h3>

			<form
				onSubmit={handleSubmit}
				className="flex items-center justify-between gap-8 w-full"
			>
				<textarea
					name="desc"
					value={commentText}
					onChange={(e) => setCommentText(e.target.value)}
					placeholder="Write a comment..."
					className="w-full p-4 text-sm rounded-xl bg-slate-50 outline-cyan-600"
				/>
				<button
					type="submit"
					className="bg-cyan-600 px-4 py-3 text-white font-medium rounded-xl text-sm"
					disabled={mutation.isPending}
				>
					{mutation.isPending ? "Sending..." : "Send"}
				</button>
			</form>

			{isPending ? (
				<p>Loading...</p>
			) : error ? (
				<p>Error loading comments!</p>
			) : (
				<>
					{mutation.isPending && mutation.variables && (
						<Comment
							comment={{
								desc: `${mutation.variables.desc} (Sending...)`,
								createdAt: new Date(),
								user: {
									img: user?.imageUrl ?? "",
									username: user?.username ?? "Unknown User",
								},
							}}
							postId={postId}
						/>
					)}
					{data.map((comment: any) => (
						<Comment key={comment._id} comment={comment} postId={postId} />
					))}
				</>
			)}
		</div>
	);
};

export default Comments;
