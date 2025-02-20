import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="w-full h-16 md:h-20 flex items-center justify-between">
			{/* LOGO */}
			<Link to="/" className="flex items-center gap-4 text-2xl font-bold">
				<Image
					className=""
					src="logo-blue-alternative.png"
					w={32}
					h={32}
					alt="devinsights. logo"
				/>
				<div className="flex">
					<span className="text-black">dev</span>
					<span className="text-cyan-600">insights.</span>
				</div>
			</Link>
			{/* MOBILE MENU */}
			<div className="md:hidden">
				{/* MOBILE BUTTON */}
				<div
					className="cursor-pointer text-2xl"
					onClick={() => setOpen((prev) => !prev)}
				>
					{open ? <IoCloseSharp /> : <RxHamburgerMenu />}
				</div>
				{/* MOBILE LINK LIST */}
				<div
					className={`w-full h-screen flex flex-col items-center justify-center absolute 
						gap-8 font-medium text-lg
						top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}
				>
					<Link to="/">Home</Link>
					<Link to="/">Trending</Link>
					<Link to="/">Most Popular</Link>
					<Link to="/">About</Link>
					<Link to="/login">
						<button className="py-2 px-4 rounded-3xl bg-cyan-600 text-white">
							Login 👋
						</button>
					</Link>
				</div>
			</div>
			{/* DESKTOP MENU */}
			<div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
				<Link to="/">Home</Link>
				<Link to="/">Trending</Link>
				<Link to="/">Most Popular</Link>
				<Link to="/">About</Link>

				<SignedOut>
					<Link to="/login">
						<button className="py-2 px-4 rounded-3xl bg-cyan-600 text-white">
							Login 👋
						</button>
					</Link>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</div>
	);
};

export default Navbar;
