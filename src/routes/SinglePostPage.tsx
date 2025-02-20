import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
	return (
		<div className="flex flex-col gap-8">
			{/* detail */}
			<div className="flex gap-8">
				<div className="lg:w-3/5 flex flex-col gap-8">
					<h1 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
						maiores odit sed repellat labore.
					</h1>

					<div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
						<span>Written by</span>
						<Link to="/" className="text-cyan-600">
							John Doe
						</Link>
						<span>on</span>
						<Link to="/" className="text-cyan-600">
							Web Design
						</Link>
						<span>2 days ago</span>
					</div>

					<p className="text-gray-500 font-medium">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
						perspiciatis vel autem, dolore, mollitia iusto quia, quod eaque
						tenetur nihil inventore minus eum unde quos sint delectus? Modi,
						inventore fugiat.
					</p>
				</div>

				<div className="hidden lg:block w-2/5">
					<Image src="postImg.jpeg" w="600" className="rounded-3xl" />
				</div>
			</div>

			{/* content */}
			<div className="flex flex-col md:flex-row gap-8">
				{/* text */}
				<div className="flex flex-col gap-6 text-justify">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
						fugit obcaecati libero ratione odit optio est ex consequuntur vitae,
						temporibus earum. Provident unde enim at nostrum vero harum tempora
						quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur fugit obcaecati libero ratione odit optio est ex
						consequuntur vitae, temporibus earum. Provident unde enim at nostrum
						vero harum tempora quibusdam. Consequatur fugit obcaecati libero
						ratione odit optio est ex consequuntur vitae, temporibus earum.
						Provident unde enim at nostrum vero harum tempora quibusdam.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
						fugit obcaecati libero ratione odit optio est ex consequuntur vitae,
						temporibus earum. Provident unde enim at nostrum vero harum tempora
						quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur fugit obcaecati libero ratione odit optio est ex
						consequuntur vitae, temporibus earum. Provident unde enim at nostrum
						vero harum tempora quibusdam. Consequatur fugit obcaecati libero
						ratione odit optio est ex consequuntur vitae, temporibus earum.
						Provident unde enim at nostrum vero harum tempora quibusdam.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
						fugit obcaecati libero ratione odit optio est ex consequuntur vitae,
						temporibus earum. Provident unde enim at nostrum vero harum tempora
						quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur fugit obcaecati libero ratione odit optio est ex
						consequuntur vitae, temporibus earum. Provident unde enim at nostrum
						vero harum tempora quibusdam. Consequatur fugit obcaecati libero
						ratione odit optio est ex consequuntur vitae, temporibus earum.
						Provident unde enim at nostrum vero harum tempora quibusdam.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
						fugit obcaecati libero ratione odit optio est ex consequuntur vitae,
						temporibus earum. Provident unde enim at nostrum vero harum tempora
						quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur fugit obcaecati libero ratione odit optio est ex
						consequuntur vitae, temporibus earum. Provident unde enim at nostrum
						vero harum tempora quibusdam. Consequatur fugit obcaecati libero
						ratione odit optio est ex consequuntur vitae, temporibus earum.
						Provident unde enim at nostrum vero harum tempora quibusdam.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
						fugit obcaecati libero ratione odit optio est ex consequuntur vitae,
						temporibus earum. Provident unde enim at nostrum vero harum tempora
						quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur fugit obcaecati libero ratione odit optio est ex
						consequuntur vitae, temporibus earum. Provident unde enim at nostrum
						vero harum tempora quibusdam. Consequatur fugit obcaecati libero
						ratione odit optio est ex consequuntur vitae, temporibus earum.
						Provident unde enim at nostrum vero harum tempora quibusdam.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
						fugit obcaecati libero ratione odit optio est ex consequuntur vitae,
						temporibus earum. Provident unde enim at nostrum vero harum tempora
						quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur fugit obcaecati libero ratione odit optio est ex
						consequuntur vitae, temporibus earum. Provident unde enim at nostrum
						vero harum tempora quibusdam. Consequatur fugit obcaecati libero
						ratione odit optio est ex consequuntur vitae, temporibus earum.
						Provident unde enim at nostrum vero harum tempora quibusdam.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
						fugit obcaecati libero ratione odit optio est ex consequuntur vitae,
						temporibus earum. Provident unde enim at nostrum vero harum tempora
						quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur fugit obcaecati libero ratione odit optio est ex
						consequuntur vitae, temporibus earum. Provident unde enim at nostrum
						vero harum tempora quibusdam. Consequatur fugit obcaecati libero
						ratione odit optio est ex consequuntur vitae, temporibus earum.
						Provident unde enim at nostrum vero harum tempora quibusdam.
					</p>
				</div>

				{/* menu */}
				<div className="px-4 h-max sticky top-8 text-sm">
					<h4 className="mb-4 text-sm font-medium">Author</h4>

					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-6">
							<Image
								src="userImg.jpeg"
								className="w-12 h-12 rounded-full object-cover"
								w="48"
								h="48"
							/>
							<Link to="/" className="text-cyan-600">
								John Doe
							</Link>
						</div>
						<p className="text-xs text-gray-500">
							Lorem ipsum dolor sit amet consectetur
						</p>
						<div className="flex gap-2">
							<Link to="/">
								<Image src="facebook.svg" />
							</Link>
							<Link to="/">
								<Image src="instagram.svg" />
							</Link>
						</div>
					</div>

					<PostMenuActions />

					<h4 className="mt-8 mb-4 text-sm font-medium">Categories</h4>
					<div className="flex flex-col gap-2 text-sm">
						<Link to="" className="underline">
							All
						</Link>
						<Link to="" className="underline">
							Web Design
						</Link>
						<Link to="" className="underline">
							Development
						</Link>
						<Link to="" className="underline">
							Databases
						</Link>
						<Link to="" className="underline">
							Search Engines
						</Link>
						<Link to="" className="underline">
							Marketing
						</Link>
					</div>

					<h4 className="mt-8 mb-4 text-sm font-medium">Search</h4>
					<Search />
				</div>
			</div>

			<Comments />
		</div>
	);
};

export default SinglePostPage;
