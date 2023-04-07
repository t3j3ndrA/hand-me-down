import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<div className="bg-black text-white flex flex-row flex-wrap gap-2 px-2 py-10">
			{/* Logo + Descirption */}
			<div className="">
				<h2 className="uppercase font-semibol text-2xl">hand me down</h2>
				<p className="text-gray-200 text-justify">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
					voluptas rem unde dolore sequi necessitatibus commodi ipsam
					exercitationem! Quos, modi!
				</p>
			</div>
		</div>
	);
};

export default Footer;
