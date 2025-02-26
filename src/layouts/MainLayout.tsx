import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SyncUser from "../components/SyncUser";

const MainLayout = () => {
	return (
		<div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 3xl:px-64">
			<Navbar />
			{/*Esse componente garante que o usuário esteja salvo no banco de dados */}
			<SyncUser />
			<Outlet />
		</div>
	);
};

export default MainLayout;
