import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { AiOutlineSearch } from "react-icons/ai";
import axiosInstance from "../axios/axios-instance";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { getCookie, getCookies } from "cookies-next";
import getUser from "../lib/getUser";
import { useState, useEffect } from "react";

export default function Home(props) {
	const [products, setProducts] = useState([]);
	const [filter, setFilter] = useState({ keyword: "" });
	useEffect(() => {
		setProducts(props.data);
	}, []);

	const fetchProducts = async (filter) => {
		let filterURL = "";
		for (const query in filter) {
			filterURL += `${query}=${filter[query]}&`;
		}
		console.log("filter >> ", filterURL);
		const { data } = await axiosInstance.get(`/api/products?${filterURL}`);
		setProducts(data.data);
	};

	const handleFilterChange = (e) => {
		setFilter({ ...filter, [e.target.name]: e.target.value });
		fetchProducts({ ...filter, [e.target.name]: e.target.value });
	};
	return (
		<div>
			{/* Navbar */}
			<Navbar focusOn={"home"} />
			{/* Search box */}
			<div className="mx-3 my-4 px-3 rounded-md flex flex-row gap-0 items-center border-gray-400 border-[1px] md:mx-12 lg:mx-52">
				<AiOutlineSearch size={28} />
				<input
					type="text"
					className="outline-none px-4 py-2 w-full"
					placeholder="search..."
					name="keyword"
					value={filter.keyword}
					onChange={handleFilterChange}
				/>
			</div>
			{/* Products */}
			<div className="flex flex-row justify-center flex-wrap lg:mx-52">
				{products?.map((product) => {
					return <ProductCard {...product} key={product._id} />;
				})}
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export async function getServerSideProps({ req, res }) {
	console.log("cookies >> ", getCookie("uid", { req, res }));
	console.log("all cookies >> ", getCookies({ req, res }));
	const { data } = await axiosInstance.get(`/api/products`);
	return { props: data };
}
