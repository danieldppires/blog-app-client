import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect } from "react";

const SyncUser = () => {
	const { isSignedIn, user } = useUser();
	const { getToken } = useAuth();

	useEffect(() => {
		const syncUserToDatabase = async () => {
			if (isSignedIn && user) {
				try {
					const token = await getToken();
					const { emailAddresses, username, profileImageUrl } = user as any;

					// Preparar os dados do usuário para enviar ao backend
					const userData = {
						clerkUserId: user.id,
						username: username || emailAddresses[0].emailAddress,
						email: emailAddresses[0].emailAddress,
						img: profileImageUrl ?? "",
					};

					// Enviar os dados ao backend para salvar no banco de dados
					await axios.post(
						`${import.meta.env.VITE_API_URL}/auth/sync-user`,
						userData,
						{
							headers: {
								Authorization: `Bearer ${token}`,
							},
						}
					);
				} catch (error) {
					console.error("Erro ao sincronizar usuário:", error);
				}
			}
		};

		syncUserToDatabase();
	}, [isSignedIn, user, getToken]);

	return null; // Não precisa renderizar nada
};

export default SyncUser;
