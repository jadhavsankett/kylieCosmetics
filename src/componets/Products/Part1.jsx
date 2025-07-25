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


const glossyKits = [
    {
        title: "comes naturally",
        price: "₹3,200",
        rating: 41,
        tag: "kylie's favorite",
        extra: "+6 shades",
        type: "glossy lip kit",
        image: "/images/g1.webp",
    },
    {
        title: "coconut 2.0",
        price: "₹3,200",
        rating: 41,
        tag: "kylie's favorite",
        extra: "+6 shades",
        type: "glossy lip kit",
        image: "/images/g2.webp",
    },
    {
        title: "glossy lip kit & hybrid blush duo",
        price: "₹4,600",
        originalPrice: "₹5,100",
        type: "glossy finish + soft-matte flush",
        image: "/images/g3.webp",
    },
    {
        title: "glossy lip kit & skin tint blurring elixir duo",
        price: "₹5,400",
        originalPrice: "₹6,000",
        type: "glossy finish + second-skin blur",
        image: "/images/g4.webp",
    },
    //  {
    //     title: "glossy lip kit",
    //     price: "₹5,400",
    //     originalPrice: "₹6,000",
    //     type: "glossy finish + second-skin blur",
    //     image: "/images/g1.webp",
    // },
];

const products2 = [
  {
    id: 1,
    type: "image",
    image: "/images/fre1.webp",
    title: "cosmic kylie jenner 2.0 & summer makeup collection...",
    price: "₹12,300",
    oldPrice: "₹17,700",
    subtitle: "floral amber scent + glowy, glazed skin",
    tag: "new",
  },
  {
    id: 2,
    type: "image",
    image: "/images/fre2.webp",
    title: "cosmic kylie jenner 2.0 eau de parfum",
    price: "₹7,200",
    subtitle: "100ml",
    rating: 775,
    sizes: true,
    tag: "new",
  },
  {
    id: 3,
    type: "video",
    video: "/video/fre.mp4",
  },
];


export default function Part1() {
    const imageRefs = useRef([]);
    const videoRef = useRef(null);
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


    const scrollRef = useRef();

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

            <div className="flex flex-col lg:flex-row bg-[#FDF5F2] p-6 rounded-2xl shadow mb-8 mt-8">
                <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0">
                    <video
                        className="rounded-xl w-full max-w-md"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/video/kylie.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 text-center lg:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#C2778E] mb-2">KYLIE’S FAVE NEW LIP KITS</h2>
                    <p className="text-gray-700 mb-2">Create the perfect summer lip look with our new <span className="font-semibold">glossy lip kit</span>.</p>
                    <p className="text-sm text-gray-600 mb-4">
                        Featuring our ultra-precise precision pout lip liner and cushiony supple kiss lip glaze,
                        this kit has everything you need for a shiny, contoured, long-lasting lip.
                    </p>
                    <p className="text-sm text-gray-600 mb-4">Available in six pre-paired, contrasting shades.</p>
                    <Button className="self-center lg:self-start">Shop Now</Button>
                </div>
            </div>


            <div className="bg-[#FDF5F2] py-8 px-4 rounded-xl shadow-md mb-12">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Top Left Image */}
                    <div className="relative overflow-hidden rounded-xl">
                        <img
                            src="/images/brown-p.webp"
                            alt="Brown Mascara"
                            className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-4 left-4 text-white font-bold text-sm md:text-base drop-shadow">
                            BROWN IS THE NEW BOLD
                        </span>
                    </div>

                    {/* Top Middle Image */}
                    <div className="relative overflow-hidden rounded-xl">
                        <img
                            src="/images/eyes-p.webp"
                            alt="Full Lashes"
                            className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-4 left-4 text-white font-bold text-sm md:text-base drop-shadow">
                            EFFORTLESSLY FULL LASHES
                        </span>
                    </div>

                    {/* Top Right Image */}
                    <div className="relative overflow-hidden rounded-xl">
                        <img
                            src="/images/two-p.webp"
                            alt="Eyes Close Up"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Bottom Right Image */}
                    <div className="relative overflow-hidden rounded-xl">
                        <img
                            src="/images/right-1.webp"
                            alt="Mascara Product"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Center Promo Text */}
                    <div className="col-span-2 md:col-span-1 bg-white flex flex-col justify-center items-center text-center p-6 rounded-xl shadow">
                        <h2 className="text-lg md:text-xl font-bold text-[#B57286] mb-2">
                            YOUR LASHES, BUT FULLER
                        </h2>
                        <p className="text-sm text-gray-600 mb-3">
                            Clean and vegan with a lightweight feel, our KyLash volume mascara
                            defines, lifts, and holds curl — no clumps, smudges, or flakes.
                            <br />
                            <br />
                            Get it in a new true brown shade that’s perfect for summer.
                        </p>
                        <Button>shop now</Button>
                    </div>

                    {/* Bottom Right Image */}
                    <div className="relative overflow-hidden rounded-xl">
                        <img
                            src="/images/lips-p.webp"
                            alt="Mascara Product"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>


            <div className="relative bg-[#FDF5F2] p-6 rounded-xl shadow mb-12">
                <h2 className="text-2xl font-bold mb-4">Glossy Lip Kits</h2>
                <div className="relative overflow-hidden">
                    <button
                        onClick={() => scroll("left")}
                        className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2"
                    >
                        ←
                    </button>
                    <div
                        ref={scrollRef}
                        className="flex space-x-8 overflow-x-auto no-scrollbar scroll-smooth"
                    >
                        {glossyKits.map((item, idx) => (
                            <div
                                key={idx}
                                className="min-w-[260px] bg-white rounded-lg shadow-sm overflow-hidden"
                            >
                                <div className="relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    {item.extra && (
                                        <div className="absolute top-2 left-2 text-xs bg-white text-gray-700 px-4 py-0.5 rounded-full shadow">
                                            {item.extra}
                                        </div>
                                    )}
                                    {item.tag && (
                                        <div className="absolute top-2 right-2 text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full shadow">
                                            {item.tag}
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    {item.rating && (
                                        <p className="text-sm text-gray-500 mb-1">★★★★★ ({item.rating})</p>
                                    )}
                                    <h3 className="text-sm font-semibold capitalize">{item.title}</h3>
                                    <p className="text-xs text-gray-500">{item.type}</p>
                                    <div className="mt-1 text-sm font-bold">
                                        {item.price}
                                        {item.originalPrice && (
                                            <span className="text-xs text-gray-400 line-through ml-2">
                                                {item.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => scroll("right")}
                        className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2"
                    >
                        →
                    </button>
                </div>
            </div>


            <div className=" pb-15 px-4 md:px-16">
                <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-xl">
                    <div>
                        <h2 className="text-7xl font-semibold mb-10 text-black">why we love it</h2>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-[#b68294] mb-2">glossy lip kit</h3>

                                <div className="mb-4">
                                    <p className="font-semibold text-black">pre-paired shades</p>
                                    <p className="text-sm text-gray-600">create a comfortable, contrasting lip contour.</p>
                                </div>

                                <div className="mb-4">
                                    <p className="font-semibold text-black">glossy finish</p>
                                    <p className="text-sm text-gray-600">leaves a mirror-like shine for a fuller-looking pout.</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-black">long-lasting wear</p>
                                    <p className="text-sm text-gray-600">stays put and delivers an all-day glow.</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-[#b68294] mb-2">hybrid blush</h3>

                                <div className="mb-4">
                                    <p className="font-semibold text-black">airy and weightless</p>
                                    <p className="text-sm text-gray-600">innovative, silky-smooth formula with a suede-like texture.</p>
                                </div>

                                <div className="mb-4">
                                    <p className="font-semibold text-black">skin-like, soft-matte finish</p>
                                    <p className="text-sm text-gray-600">never looks flat and leaves a diffused blush look.</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-black">up to 12-hour wear</p>
                                    <p className="text-sm text-gray-600">water-resistant, sweat- and humidity-proof, and perfect for layering.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <img
                            src="/images/set-p.webp"
                            alt="Glossy Lip Kits and Blush Pencils"
                            className="w-full rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </div>

            <div
                className="w-full h-[200px] bg-cover bg-center flex items-center justify-start px-10 shadow-amber-800"
                style={{
                    backgroundImage: `url('/images/banner.webp')`,
                }}
            >
                <div className="max-w-md text-white space-y-4">
                    <h2 className="text-3xl font-bold">THE<br />COSMIC UNIVERSE</h2>
                    <p className="text-sm">
                        go on a cosmic journey this summer with our out of this world, captivating scents.
                    </p>
                    <button className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-100 transition">
                        shop now
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-white rounded-lg">
                {products2.map((product) => (
                    <div
                        key={product.id}
                        className="rounded-xl overflow-hidden bg-white text-black shadow relative"
                    >
                        {product.type === "image" ? (
                            <>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-60 object-cover"
                                />
                                <div className="p-4 pb-7 text-sm">
                                    <h3 className="font-semibold line-clamp-2">{product.title}</h3>
                                    <div className="flex items-center gap-2 text-base font-bold mt-1">
                                        <span>{product.price}</span>
                                        {product.oldPrice && (
                                            <span className="line-through text-gray-400 text-sm">
                                                {product.oldPrice}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-600 mt-1">{product.subtitle}</p>
                                </div>
                                {product.tag && (
                                    <span className="absolute top-2 right-2 bg-gray-100 text-black text-xs px-2 py-0.5 rounded-full">
                                        {product.tag}
                                    </span>
                                )}
                                {product.rating && (
                                    <div className="absolute bottom-2 left-3 text-xs text-gray-500">
                                        ★★★★★ ({product.rating}) {product.sizes ? "• 3 sizes" : ""}
                                    </div>
                                )}
                            </>
                        ) : (
                            <video
                                ref={videoRef}
                                src={product.video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
}
