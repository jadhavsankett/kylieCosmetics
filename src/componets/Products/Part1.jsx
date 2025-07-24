import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "./Ui/Card";
import { Button } from "./Ui/Button";
import { Select, SelectItem } from "./Ui/Select";
import { Input } from "./Ui/Input";
import './Part1.css'
import {
    peachMango,
    precisionPout,
    lipCheekGlow,
    hybridBlush,
    cremeBrulee,
    hazelnutCreme,
    vanillaCaramel,
    toastedMarshmallow,
    chocolatecookie,
    LipOilGiftSet,
    pomegranate,
    passionfruit,
    LipOilDessertsTrio,
    coconut,
    strawberry,
    watermelon,
    LipOilDuo,
    LipOilBundle,
    LipOilDessertsPRBox,
} from "./Ui/Images";
import { ScrollTrigger } from "gsap/all";


const products = [
    {
        title: "peach mango",
        type: "lip butter",
        price: "₹1,800",
        tag: "new",
        rating: "1042",
        category: "lip butter",
        image: peachMango,
        altImage: '/pro-img/1-1.webp',
        colors: ["#F5E0B7", "#C4A79A", "#FFBC9A"],
    },
    {
        title: "precision pout lip liner & lip butter",
        type: "sculpted color + hydrated shine",
        price: "₹3,100",
        originalPrice: "₹3,400",
        tag: "best seller",
        category: "lip care",
        image: precisionPout,
        altImage: '/pro-img/2-2.webp',
    },
    {
        title: "lip & cheek glow balm & lip butter",
        type: "dewy flush + hydrated shine",
        price: "₹3,400",
        originalPrice: "₹3,800",
        tag: "best seller",
        category: "lip care",
        image: lipCheekGlow,
        altImage: '/pro-img/2-2.webp',
    },
    {
        title: "hybrid blush & lip butter duo",
        type: "soft-matte flush + hydrated shine",
        price: "₹3,400",
        originalPrice: "₹3,800",
        tag: "new",
        category: "lip care",
        image: hybridBlush,
        altImage: '/pro-img/4-4.webp',
    },
    {
        title: "crème brûlée",
        type: "lip oil",
        price: "₹2,300",
        rating: "3189",
        category: "lip oil",
        image: cremeBrulee,
        altImage: '/pro-img/5-5.webp',
    },
    {
        title: "hazelnut creme",
        type: "lip oil",
        price: "₹2,300",
        rating: "3147",
        category: "lip oil",
        image: hazelnutCreme,
        altImage: '/pro-img/6-6.webp',
    },
    {
        title: "vanilla caramel",
        type: "lip butter",
        price: "₹1,800",
        tag: "best seller",
        rating: "1047",
        category: "lip butter",
        image: vanillaCaramel,
        altImage: '/pro-img/7-7.webp',
        colors: ["#F5E0B7", "#FAD6BF", "#FFECD2"],
    },
    {
        title: "toasted marshmallow",
        type: "lip butter",
        price: "₹1,800",
        tag: "best seller",
        rating: "1047",
        category: "lip butter",
        image: toastedMarshmallow,
        altImage: '/pro-img/8-8.webp',
    },
    {
        title: "chocolate cookie",
        type: "lip Oil",
        price: "₹2,300",
        rating: "3182",
        category: "lip Oil",
        image: chocolatecookie,
        altImage: '/pro-img/9-9.webp',
    },
    {
        title: "Lip Oil Gift Set",
        type: "smooth + shine",
        price: "₹3,300",
        rating: "1047",
        category: "smooth + shine",
        image: LipOilGiftSet,
        altImage: '/pro-img/10-10.webp',
    },
    {
        title: "pomegranate",
        type: "lip Oil",
        price: "₹2,300",
        rating: "1047",
        category: "lip Oil",
        image: pomegranate,
        altImage: '/pro-img/11-11.webp',
    },
    {
        title: "passion fruit",
        type: "lip Oil",
        price: "₹2,300",
        tag: "best seller",
        rating: "1047",
        category: "lip Oil",
        image: passionfruit,
        altImage: '/pro-img/12-12.webp',
    },
    {
        title: "Lip Oil Desserts Trio",
        type: "smooth + shine",
        price: "₹6,010",
        rating: "1000",
        category: "smooth + shine",
        image: LipOilDessertsTrio,
        altImage: '/pro-img/13-13.webp',
    },
    {
        title: "coconut",
        type: "lip oil",
        price: "₹2,300",
        rating: "1047",
        category: "lip oil",
        image: coconut,
        altImage: '/pro-img/14-14.webp',
    },
    {
        title: "strawberry",
        type: "lip oil",
        price: "₹2,300",
        rating: "1047",
        category: "lip oil",
        image: strawberry,
        altImage: '/pro-img/15-15.webp',
    },
    {
        title: "watermelon",
        type: "lip oil",
        price: "₹2,300",
        rating: "1047",
        category: "lip oil",
        image: watermelon,
        altImage: '/pro-img/16-16.webp',
    },
    {
        title: "Lip Oil Duo",
        type: "smooth + nourish",
        price: "₹2,300",
        rating: "100",
        category: "smooth + nourish",
        image: LipOilDuo,
        altImage: '/pro-img/17-17.webp',
    },
    {
        title: "Lip Oil Bundle",
        type: "smooth + nourish",
        price: "₹7,030",
        rating: "1040",
        category: "smooth + nourish",
        image: LipOilBundle,
        altImage: '/pro-img/18-18.webp',
    },
    {
        title: "Lip Oil Desserts PR Box",
        type: "smooth + nourish",
        price: "₹8,040",
        rating: "10",
        category: "smooth + nourish",
        image: LipOilDessertsPRBox,
        altImage: '/pro-img/19-19.webp',
    },
];


export default function Part1() {
    const imageRefs = useRef([]);
    const [filter, setFilter] = useState("all");
    const [sort, setSort] = useState("featured");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;

    const filteredProducts = products
        .filter((p) => filter === "all" || p.category === filter)
        .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
            if (sort === "price-low") return parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""));
            if (sort === "price-high") return parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, ""));
            return 0;
        });

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );


    useEffect(() => {
        imageRefs.current.forEach((imgEl, index) => {
            if (!imgEl) return;

            const product = paginatedProducts[index];

            ScrollTrigger.create({
                trigger: imgEl,
                start: "top 30%", // when top of image hits 50% of viewport
                end: "bottom 100%",
                // markers: true,
                scrub: 4,
                onEnter: () => {
                    if (product?.altImage) imgEl.src = product.altImage;
                },
                onLeaveBack: () => {
                    imgEl.src = product.image;
                },
            });
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, [paginatedProducts]);



    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="p-4 pt-15 bg-[#FAEADE]">
            <h1 className="text-3xl font-bold mb-6">LIPS</h1>
            <div className="flex flex-wrap gap-4 mb-6 items-center">

                <Button variant={filter === "lip oil" ? "default" : "outline"} onClick={() => setFilter("lip oil")}>lip oils</Button>
                <Button variant={filter === "lip butter" ? "default" : "outline"} onClick={() => setFilter("lip butter")}>lip butter</Button>
                <Button variant={filter === "lip care" ? "default" : "outline"} onClick={() => setFilter("lip care")}>lip care</Button>
                <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>all</Button>

                <Select onValueChange={setSort} defaultValue="featured">
                    <SelectItem value="featured">Sort: Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                </Select>

                <Input
                    placeholder="Search products..."
                    value={search}
                    onChange={handleSearchChange}
                    className="w-64 outline-none"
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {paginatedProducts.map((product, idx) => (
                    <Card key={idx} className="relative group">
                        {product.tag && (
                            <div className="absolute top-2 left-2 bg-pink-200 text-pink-800 text-xs px-2 py-1 rounded">
                                {product.tag}
                            </div>
                        )}

                        <CardContent className="pt-4">
                            <div className="h-50 mb-4 relative">
                                {/* <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded p-1.5" /> */}

                                <img
                                    ref={(el) => (imageRefs.current[idx] = el)}
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover rounded p-1.5"
                                />

                                {/* 🎨 Color palette on hover */}
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    {product.colors?.map((color, cIdx) => (
                                        <div
                                            key={cIdx}
                                            className="w-5 h-5 rounded-full border border-white shadow"
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>

                            </div>
                            <h3 className="text-sm font-semibold capitalize">{product.title}</h3>
                            <p className="text-xs text-gray-500 mb-1">{product.type}</p>
                            <div className="text-sm font-bold">
                                {product.price}
                                {product.originalPrice && (
                                    <span className="text-gray-400 line-through text-xs ml-2">
                                        {product.originalPrice}
                                    </span>
                                )}
                            </div>
                            {product.rating && (
                                <p className="text-xs text-gray-400 mt-1">★★★★★ ({product.rating})</p>
                            )}
                        </CardContent>

                    </Card>
                ))}
            </div>

            <div className="flex justify-center items-center mt-6 space-x-2">
                <Button disabled={currentPage === 1} onClick={() => setCurrentPage((p) => p - 1)}>
                    Previous
                </Button>
                <span className="text-sm">
                    Page {currentPage} of {totalPages}
                </span>
                <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => p + 1)}>
                    Next
                </Button>
            </div>
        </div>
    );
}
