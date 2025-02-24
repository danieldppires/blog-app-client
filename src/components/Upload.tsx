import { IKContext, IKUpload } from "imagekitio-react";
import { useRef } from "react";
import { toast } from "react-toastify";

const authenticator = async () => {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/posts/upload-auth`
		);

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(
				`Request failed with status ${response.status}: ${errorText}`
			);
		}

		const data = await response.json();
		const { signature, expire, token } = data;
		return { signature, expire, token };
	} catch (err: any) {
		console.error("Authentication error:", err);
		throw new Error(`Authentication request failed: ${err.message}`);
	}
};

interface Props {
	children: React.ReactNode;
	type: string;
	setProgress: (progress: number) => void;
	setData: (data: any) => void;
}

const Upload = ({ children, type, setProgress, setData }: Props) => {
	const ref = useRef<HTMLInputElement | null>(null);

	const onError = (err: any) => {
		console.log(err);
		toast.error("Image upload failed");
	};

	const onSuccess = (res: any) => {
		console.log(res);
		setData(res);
	};

	const onUploadProgress = (progress: { loaded: number; total: number }) => {
		console.log(progress);
		setProgress(Math.round((progress.loaded / progress.total) * 100));
	};
	return (
		<IKContext
			publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
			urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
			authenticator={authenticator}
		>
			<IKUpload
				useUniqueFileName
				onError={onError}
				onSuccess={onSuccess}
				onUploadProgress={onUploadProgress}
				className="hidden"
				ref={ref}
				accept={`${type}/*`}
			/>

			<div className="cursor-pointer" onClick={() => ref.current?.click()}>
				{children}
			</div>
		</IKContext>
	);
};

export default Upload;
