import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/Homepage.tsx";
import PostListPage from "./routes/PostListPage.tsx";
import Write from "./routes/Write.tsx";
import LoginPage from "./routes/LoginPage.tsx";
import RegisterPage from "./routes/RegisterPage.tsx";
import SinglePostPage from "./routes/SinglePostPage.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{ path: "/", element: <Homepage /> },
			{ path: "/posts", element: <PostListPage /> },
			{ path: "/write", element: <Write /> },
			{ path: "/login", element: <LoginPage /> },
			{ path: "/register", element: <RegisterPage /> },
			{ path: "/posts/:slug", element: <SinglePostPage /> },
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
			<RouterProvider router={router} />
		</ClerkProvider>
	</StrictMode>
);
