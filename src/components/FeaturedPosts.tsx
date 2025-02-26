import { Link } from "react-router-dom";
import Image from "./Image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

interface Post {
	_id: any;
	user: { username: string; img: string };
	img: string;
	title: string;
	desc: string;
	content: string;
	slug: string;
	category: string;
	createdAt: Date;
}

const fetchPost = async () => {
	const res = await axios.get(
		`${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`
	);
	return res.data;
};

const FeaturedPosts = () => {
	const { isPending, error, data } = useQuery({
		queryKey: ["featuredPosts"],
		queryFn: () => fetchPost(),
	});

	if (isPending) return <p>Loading...</p>;
	if (error) return <p>Something went wrong.</p>;

	const posts = data.posts;
	if (!posts || posts.length === 0) return; // Se não houver posts featured, não exibe o componente

	return (
		<div className="mt-8 flex flex-col lg:flex-row gap-8">
			{/* First */}
			<div className="w-full lg:w-1/2 flex flex-col gap-4">
				{posts[0].img && (
					<Link to={`/posts/${posts[0].slug}`}>
						<Image
							src={posts[0].img}
							className="rounded-3xl object-cover"
							w="895"
							// O ideal é colocar o tamanho máximo que a imagem poderá ter
							// O usuário poderá fazer o upload de uma imagem bem grande, mas se ela
							// só vai ser exibida no website até o tamanho X, podemos fazer com que
							// ela seja transformada para aquele tamanho afim de ficar bem mais leve
							// O cálculo do tamanho máximo da image foi feito da seguinte maneira:
							// Tamanho do breakpoint onde a imagem estará visível e tamanho do seu
							// container - padding e margin. No caso desta imagem, o breakpoint onde
							// ela tem a maior largura é o xl com 1023. A conta aqui foi 1023 - 128 (padding)
							// de 64 de cada lado. Logo, o tamanho máximo dela será 895.
						/>
					</Link>
				)}

				<div className="flex items-center gap-4">
					<h2 className="font-semibold text-sm lg:text-base">01.</h2>
					<Link
						to={`/posts?cat=${posts[0].category}`}
						className="text-cyan-600 text-sm lg:text-base"
					>
						{posts[0].category}
					</Link>
					<span className="text-gray-500 text-sm">
						{format(posts[0].createdAt)}
					</span>
				</div>

				<Link
					to={`/posts/${posts[0].slug}`}
					className="text-xl md:text-3xl lg:text-3xl font-semibold lg:font-bold"
				>
					{posts[0].title}
				</Link>
			</div>

			{/* Others */}
			<div className="w-full lg:w-1/2 flex flex-col gap-4">
				{/* Second */}
				{posts[1] && (
					<div className="lg:h-1/3 flex justify-between gap-4">
						<div className="w-1/3 aspect-video">
							{posts[1].img && (
								<Link to={`/posts/${posts[1].slug}`}>
									<Image
										src={posts[1].img}
										className="rounded-3xl object-cover w-full h-full"
										w="298"
									/>
								</Link>
							)}
						</div>
						{/* details and title*/}
						<div className="w-2/3">
							{/* details */}
							<div className="flex items-center gap-4 text-sm mb-2 md:mb-4">
								<h2 className="font-semibold">02.</h2>
								<Link
									to={`/posts?cat=${posts[1].category}`}
									className="text-cyan-600"
								>
									{posts[1].category}
								</Link>
								<span className="text-gray-500 text-xs">
									{format(posts[1].createdAt)}
								</span>
							</div>
							<div className="line-clamp-3 xl:line-clamp-4">
								<Link
									to={`/posts/${posts[1].slug}`}
									className="text-base sm:text-lg md:text-2xl lg:text-xl font-medium"
								>
									{posts[1].title}
								</Link>
							</div>
						</div>
					</div>
				)}

				{/* Third */}
				{posts[2] && (
					<div className="lg:h-1/3 flex justify-between gap-4">
						<div className="w-1/3 aspect-video">
							{posts[2].img && (
								<Link to={`/posts/${posts[2].slug}`}>
									<Image
										src={posts[2].img}
										className="rounded-3xl object-cover w-full h-full"
										w="298"
									/>
								</Link>
							)}
						</div>
						{/* details and title*/}
						<div className="w-2/3">
							{/* details */}
							<div className="flex items-center gap-4 text-sm mb-2 md:mb-4">
								<h2 className="font-semibold">03.</h2>
								<Link
									to={`/posts?cat=${posts[2].category}`}
									className="text-cyan-600"
								>
									{posts[2].category}
								</Link>
								<span className="text-gray-500 text-xs">
									{format(posts[2].createdAt)}
								</span>
							</div>
							<div className="line-clamp-3 xl:line-clamp-4">
								<Link
									to={`/posts/${posts[2].slug}`}
									className="text-base sm:text-lg md:text-2xl lg:text-xl font-medium"
								>
									{posts[2].title}
								</Link>
							</div>
						</div>
					</div>
				)}

				{/* Fourth */}
				{posts[3] && (
					<div className="lg:h-1/3 flex justify-between gap-4">
						<div className="w-1/3 aspect-video">
							{posts[3].img && (
								<Link to={`/posts/${posts[3].slug}`}>
									<Image
										src={posts[3].img}
										className="rounded-3xl object-cover w-full h-full"
										w="298"
									/>
								</Link>
							)}
						</div>
						{/* details and title*/}
						<div className="w-2/3">
							{/* details */}
							<div className="flex items-center gap-4 text-sm mb-2 md:mb-4">
								<h2 className="font-semibold">04.</h2>
								<Link
									to={`/posts?cat=${posts[3].category}`}
									className="text-cyan-600"
								>
									{posts[3].category}
								</Link>
								<span className="text-gray-500 text-xs">
									{format(posts[3].createdAt)}
								</span>
							</div>
							<div className="line-clamp-3 xl:line-clamp-4">
								<Link
									to={`/posts/${posts[3].slug}`}
									className="text-base sm:text-lg md:text-2xl lg:text-xl font-medium"
								>
									{posts[3].title}
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default FeaturedPosts;
