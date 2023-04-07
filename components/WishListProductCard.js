import Image from "next/image";
import bookImg from "../public/book.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { toast } from "react-toastify";
import axiosInstance from "../axios/axios-instance";
import { useState } from "react";

const WishListProductCard = ({
	_id,
	name,
	counts,
	price,
	description,
	categories,
	productImages,
	condition,
	seller,
	uid,
}) => {
	const [hasRemoved, setHasRemoved] = useState(false);
	const handleRemoveFromWishList = async () => {
		setHasRemoved(true);
		try {
			const { data } = await axiosInstance.put(
				`/api/users/${uid}/wishlist/remove`,
				{
					pid: _id,
				}
			);

			if (data.success === true) {
				toast.success("Item removed from wishlist ❣️");
			}
			console.log("resp >> ", data);
		} catch (err) {
			console.log("err >> ", err);
		} finally {
		}
	};

	if (hasRemoved) {
		return <></>;
	}

	return (
		// <Link href={`/product/${_id}`}>
		<div className="mx-4 my-2 flex flex-row gap-4 md:gap-10 border-b-gray-400 border-b-[1px] shadow-md px-5 py-4">
			<div className="w-1/2 md:w-1/6">
				{productImages.length > 0 && (
					<Image
						src={productImages[0]}
						width={400}
						height={400}
						alt="product image"
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
						<span className="font-semibold">Price :</span> ₹{price}
					</p>
					<p>
						In <span className="font-semibold uppercase">{condition}</span>{" "}
						Condition
					</p>
					<span>{description}</span>
					<div className="flex flex-row gap-2">
						<Link href={`/product/${_id}`}>
							<button className="w-52 mt-4 px-4 py-2 uppercase font-semibold bg-black text-white hover:text-black hover:bg-white transition-all duration-500 border-black border-[1px] rounded-2 ">
								<span className="uppercase ">View More</span>
							</button>
						</Link>
						<button
							type="button"
							onClick={handleRemoveFromWishList}
							className="w-52 mt-4 px-4 py-2 uppercase font-semibold bg-white text-black hover:text-white hover:bg-black transition-all duration-500 border-black border-[1px] rounded-2 "
						>
							<span className="uppercase "> Remove Item</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		// </Link>
	);
};

export default WishListProductCard;
