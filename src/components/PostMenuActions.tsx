import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
	PiBookmarkSimple,
	PiBookmarkSimpleFill,
	PiBookmarkSimpleLight,
	PiStar,
	PiStarFill,
	PiTrash,
} from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface Post {
	_id: string;
	user: {
		username: string;
	};
	isFeatured: boolean;
	slug: string;
}
interface Props {
	post: Post;
}

const PostMenuActions = ({ post }: Props) => {
	const { user } = useUser();
	const { getToken } = useAuth();
	const navigate = useNavigate();

	const {
		isPending,
		error,
		data: savedPosts,
	} = useQuery({
		queryKey: ["savedPosts"],
		queryFn: async () => {
			const token = await getToken();

			const response = await axios.get(
				`${import.meta.env.VITE_API_URL}/users/saved`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			return response.data;
		},
	});

	const isAdmin = user?.publicMetadata?.role === "admin" || false;

	//const isSaved = savedPosts?.data?.some((p: any) => p === post._id) || false;
	const isSaved =
		Array.isArray(savedPosts) && savedPosts.some((p) => p === post._id);

	const isFeatured = post.isFeatured || false;

	const deleteMutation = useMutation({
		mutationFn: async () => {
			const token = await getToken();
			return axios.delete(`${import.meta.env.VITE_API_URL}/posts/${post._id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
		},
		onSuccess: () => {
			toast.success("Post deleted!");
			navigate("/");
		},
		onError: (error: any) => {
			const errorMessage = error.response?.data || "An error occurred";
			toast.error(errorMessage);
		},
	});

	const queryClient = useQueryClient();

	const saveMutation = useMutation({
		mutationFn: async () => {
			const token = await getToken();
			return axios.patch(
				`${import.meta.env.VITE_API_URL}/users/save`,
				{
					postId: post._id,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["savedPosts"] });
		},
		onError: (error: any) => {
			const errorMessage = error.response?.data || "An error occurred";
			toast.error(errorMessage);
		},
	});

	const featureMutation = useMutation({
		mutationFn: async () => {
			const token = await getToken();
			return axios.patch(
				`${import.meta.env.VITE_API_URL}/posts/feature`,
				{
					postId: post._id,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["post", post.slug] });
		},
		onError: (error: any) => {
			const errorMessage = error.response?.data || "An error occurred";
			toast.error(errorMessage);
		},
	});

	const handleDelete = () => {
		deleteMutation.mutate();
	};

	const handleFeature = () => {
		featureMutation.mutate();
	};

	const handleSave = () => {
		if (!user) {
			return navigate("/login");
		}
		saveMutation.mutate();
	};

	return (
		<div>
			<h4 className="mt-8 mb-4 text-sm font-medium">Actions</h4>

			<div className="flex flex-col gap-4">
				{isPending ? (
					"Loading..."
				) : error ? (
					"Saved post fetching failed!"
				) : (
					<div
						onClick={handleSave}
						className="flex gap-2 items-center text-sm cursor-pointer"
					>
						{isSaved ? (
							<PiBookmarkSimpleFill size={20} />
						) : (
							<PiBookmarkSimple size={20} />
						)}
						<span>Save this post</span>
						{saveMutation.isPending && (
							<span className="text-xs">(in progress...)</span>
						)}
					</div>
				)}

				{isAdmin && (
					<div
						onClick={handleFeature}
						className="flex gap-2 items-center text-sm cursor-pointer"
					>
						{isFeatured ? <PiStarFill size={20} /> : <PiStar size={20} />}
						<span>Feature</span>
						{featureMutation.isPending && (
							<span className="text-xs">(in progress...)</span>
						)}
					</div>
				)}

				{user && (post?.user?.username === user?.username || isAdmin) && (
					<div
						onClick={handleDelete}
						className="flex gap-2 items-center text-sm cursor-pointer text-red-500"
					>
						<PiTrash size={20} />
						<span>Delete this post</span>
						{deleteMutation.isPending && (
							<span className="text-xs">(in progress)</span>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default PostMenuActions;
