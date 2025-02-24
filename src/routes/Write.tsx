import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Write = () => {
	const { isLoaded, isSignedIn } = useUser();
	const [value, setValue] = useState("");

	const navigate = useNavigate();

	const { getToken } = useAuth();

	// Mutations não pode ser chamado (ou criado?) condicionalmente, por isso chamar antes dos ifs abaixo
	const mutation = useMutation<
		{ slug: string },
		Error,
		{ title: string; category: string; desc: string; content: string }
	>({
		mutationFn: async (newPost) => {
			const token = await getToken();
			const response = await axios.post(
				`${import.meta.env.VITE_API_URL}/posts`,
				newPost,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			return response.data.post;
		},
		onSuccess: (res) => {
			toast.success("Post has been created");
			navigate(`/posts/${res.slug}`);
		},
	});

	if (!isLoaded) return <div className="">Loading...</div>;

	if (isLoaded && !isSignedIn) return <div className="">You should login!</div>;

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);

		const data = {
			title: formData.get("title") as string,
			category: formData.get("category") as string,
			desc: formData.get("desc") as string,
			content: value,
		};

		mutation.mutate(data);
	};

	return (
		<div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
			<h1 className="text-xl font-light">Create a New Post</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
				<button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
					Add a cover image
				</button>

				<input
					name="title"
					type="text"
					className="text-4xl font-semibold outline-0"
					placeholder="My Awesome Story"
				/>

				<div className="flex items-center gap-4">
					<label htmlFor="" className="text-sm">
						Chose a category:
					</label>
					<select
						name="category"
						className="p-2 shadow-md rounded-xl text-sm bg-white"
					>
						<option value="general">General</option>
						<option value="web-design">Web Design</option>
						<option value="development">Development</option>
						<option value="databases">Databases</option>
						<option value="seo">Search Engines</option>
						<option value="marketing">Marketing</option>
					</select>
				</div>

				<textarea
					name="desc"
					className="p-2 shadow-md rounded-xl text-sm bg-white"
					placeholder="A short Description"
				/>

				<ReactQuill
					theme="snow"
					className="flex-1 shadow-md rounded-xl text-sm bg-white"
					value={value}
					onChange={setValue}
				/>

				<button
					disabled={mutation.isPending}
					className="bg-cyan-600 text-white text-sm font-medium rounded-xl mt-4 p-2 w-36
						disabled:bg-cyan-300 disabled:cursor-not-allowed"
				>
					{mutation.isPending ? "Loading..." : "Send"}
				</button>

				{mutation.isError && <span>{mutation.error.message}</span>}
			</form>
		</div>
	);
};

export default Write;
