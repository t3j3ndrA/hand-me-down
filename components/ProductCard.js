import Image from "next/image";
import bookImg from "../public/book.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";

const ProductCard = ({
	_id,
	name,
	counts,
	price,
	description,
	categories,
	condition,
	productImages,
}) => {
	return (
		<Link href={`/product/${_id}`}>
			<div className="md:mx-4 my-2 w-full md:w-56 shadow-lg rounded-sm  ">
				<div className="overflow-hidden flex flex-row justify-center">
					<Image
						src={
							productImages && productImages.length > 0
								? productImages[0]
								: bookImg
						}
						width={400}
						height={400}
						alt="product image"
						className="shadow-md w-42 h-52 object-contain"
					/>
				</div>

				<div className="mt-1 px-4 pb-2 h-50">
					<div className="flex flex-col w-5/6 h-24 overflow-hidden">
						<span className=" font-semibold w-56 text-ellipsis">{name}</span>
						<span>
							Only for <span className="font-semibold ">₹{price} </span>
						</span>
						<span>
							In <span className="font-semibold ">{condition}</span> Condition
						</span>
					</div>
					<Link href={`/product/${_id}`}>
						<button className="   mt-2 4 px-[4px] py-[1px]  font-semibold bg-white text-black hover:text-white hover:bg-black transition-all duration-500 border-black border-[1px] rounded-2 ">
							<span className=" text-[12px] ">View More</span>
						</button>
					</Link>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
