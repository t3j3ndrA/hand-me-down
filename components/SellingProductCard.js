import Image from "next/image";
import bookImg from "../public/book.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";

const SellingProductCard = ({
	_id,
	name,
	counts,
	price,
	description,
	categories,
	productImages,
	seller,
}) => {
	return (
		<Link href={`/seller/${seller}/product/${_id}`}>
			<div className="mx-4 my-2 flex flex-row gap-4 md:gap-10 border-b-gray-400 border-b-[1px] shadow-md px-5 py-4">
				<div className="w-1/2 md:w-1/6">
					{productImages.length > 0 && (
						<Image
							src={productImages[0]}
							width={400}
							height={400}
							className="w-44 h-[50vh] md:h-[40vh] lg:h-[35vh] object-contain object-center"
						/>
					)}
				</div>

				<div className="flex flex-row justify-between mt-1 w-1/2 md:w-5/6">
					<div className="flex flex-col justify-between">
						<span className="uppercase font-semibold">{name}</span>
						<p>
							<span className="font-semibold">Availabe :</span> {counts}
						</p>
						<p>
							<span className="font-semibold">Price : </span>₹{price}
						</p>
						<span>{description}</span>
						<Link href={`/seller/${seller}/product/${_id}`}>
							<button className="w-52 mt-4 px-4 py-2 uppercase font-semibold bg-black text-white hover:text-black hover:bg-white transition-all duration-500 border-black border-[1px] rounded-2 ">
								<span className="uppercase ">Edit item</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default SellingProductCard;