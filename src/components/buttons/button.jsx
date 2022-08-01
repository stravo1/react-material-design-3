import { useEffect, useState } from "react";

const Button = ({ icon, text, type }) => {
	const [cls, setCls] = useState(
		"m-2 rounded-full px-6 py-2 bg-neutral-100 min-w-fit text-neutral-800 drop-shadow-md flex justify-between items-center"
	);

	useEffect(() => {
		switch (type) {
			case "elevated":
				setCls(
					"m-2 rounded-full px-6 py-2 bg-neutral-100 min-w-fit text-neutral-800 drop-shadow-md flex justify-between items-center"
				);
				break;
			case "filled":
				setCls(
					"m-2 flex justify-between items-center rounded-full px-6 py-2 bg-neutral-800 min-w-fit text-neutral-100"
				);
				break;
			case "filledTonal":
				setCls(
					"m-2 rounded-full px-6 py-2 bg-neutral-300 min-w-fit text-neutral-800 flex justify-between items-center"
				);
				break;
			case "outline":
				setCls(
					"m-2 rounded-full px-6 py-2 bg-neutral-100 min-w-fit text-neutral-800 ring-1 ring-black flex justify-between items-center"
				);
				break;
			case "text":
				setCls(
					"m-2 rounded-full px-6 py-2 min-w-fit text-neutral-800 flex justify-between items-center"
				);
				break;
			default:
				setCls(
					"m-2 rounded-full px-6 py-2 bg-neutral-100 min-w-fit text-neutral-800 drop-shadow-md flex justify-between items-center"
				);
		}
	}, [type]);

	return (
		<button className={cls}>
			{icon && <span className="material-symbols-rounded mr-2">{icon}</span>}
			{text}
		</button>
	);
};

export default Button;
