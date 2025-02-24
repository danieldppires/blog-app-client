import PostListItem from "./PostListItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
	const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
	return res.data;
};

const PostList = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["posts"], // Identificador único do cache
		queryFn: fetchPosts, // Função que busca os dados
	});

	if (isLoading) return <p>Carregando...</p>;
	if (error) return <p>Erro ao carregar os dados</p>;

	console.log(data);

	return (
		<div className="flex flex-col gap-12 mb-8">
			<PostListItem />
			<PostListItem />
			<PostListItem />
			<PostListItem />
			<PostListItem />
			<PostListItem />
			<PostListItem />
			<PostListItem />
			<PostListItem />
			<PostListItem />
		</div>
	);
};

export default PostList;
