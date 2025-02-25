import axios from "axios";
import Comment from "./Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import { useRef } from "react";

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
	const { getToken } = useAuth();
	const queryClient = useQueryClient();
	const textareaRef = useRef<HTMLTextAreaElement>(null); // Criação da ref para o textarea

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
			if (textareaRef.current) {
				textareaRef.current.value = ""; // Limpa o campo após o envio
			}
		},
		onError: (error: any) => {
			toast.error(error.response?.data || "An error occurred");
		},
	});

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const desc = formData.get("desc") as string;

		if (!desc.trim()) {
			toast.error("Comment cannot be empty.");
			return;
		}

		mutation.mutate({ desc });
	};

	return (
		<div className="flex flex-col gap-8 lg:w-3/5 mb-12">
			<h3 className="text-lg text-gray-500 underline">Comments</h3>

			<form
				onSubmit={handleSubmit}
				className="flex items-center justify-between gap-8 w-full"
			>
				<textarea
					ref={textareaRef} // Referência ao textarea
					name="desc"
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
					{data.map((comment: any) => (
						<Comment key={comment._id} comment={comment} />
					))}
				</>
			)}
		</div>
	);
};

export default Comments;
