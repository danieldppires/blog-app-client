import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
// import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden"; // Impede rolagem
		} else {
			document.body.style.overflow = "auto"; // Permite rolagem
		}

		return () => {
			document.body.style.overflow = "auto"; // Garante que o estilo é resetado quando o componente desmonta
		};
	}, [open]);

	return (
		<div className="w-full h-16 md:h-20 flex items-center justify-between">
			{/* LOGO */}
			<Link to="/" className="flex items-center gap-4 text-2xl font-bold">
				<img
					src="logo-blue-alternative.png"
					width={32}
					height={32}
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
					className="cursor-pointer text-2xl z-50 relative"
					onClick={() => setOpen((prev) => !prev)}
				>
					{/* {open ? <IoCloseSharp /> : <RxHamburgerMenu />} */}
					<div className="flex flex-col gap-[5.4px]">
						<div
							className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
								open && "rotate-45"
							}`}
						></div>

						<div
							className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${
								open && "opacity-0"
							}`}
						></div>

						<div
							className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
								open && "-rotate-45"
							}`}
						></div>
					</div>
				</div>

				{/* MOBILE LINK LIST */}
				<div
					className={`w-full h-screen flex flex-col items-center justify-center fixed 
						gap-8 font-medium text-lg bg-cyan-800 z-50
						top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}
				>
					<Link to="/" onClick={() => setOpen(false)}>
						Home
					</Link>
					<Link to="/posts?sort=trending" onClick={() => setOpen(false)}>
						Trending
					</Link>
					<Link to="/posts?sort=popular" onClick={() => setOpen(false)}>
						Most Popular
					</Link>
					<Link to="/" onClick={() => setOpen(false)}>
						About
					</Link>
					<Link to="/login" onClick={() => setOpen(false)}>
						<button className="py-2 px-4 rounded-3xl bg-cyan-600 text-white">
							Login 👋
						</button>
					</Link>
				</div>
			</div>

			{/* DESKTOP MENU */}
			<div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
				<Link to="/">Home</Link>
				<Link to="/posts?sort=trending">Trending</Link>
				<Link to="/posts?sort=popular">Most Popular</Link>
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
