import { IKImage } from "imagekitio-react";

interface Props {
	src: string;
	className?: string;
	w?: number | string;
	h?: number | string;
	alt?: string;
}

const Image = ({
	src,
	className = "",
	w = "auto",
	h = "auto",
	alt = "",
}: Props) => {
	return (
		<IKImage
			urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
			path={src}
			loading="lazy"
			lqip={{ active: true, quality: 20 }}
			alt={alt}
			width={w}
			height={h}
			className={className}
		/>
	);
};

export default Image;
