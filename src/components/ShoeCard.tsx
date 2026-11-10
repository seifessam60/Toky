"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Star, Zap } from "lucide-react";
import type { Shoe } from "@/lib/data";
import { formatPrice } from "@/lib/data";

interface ShoeCardProps {
  shoe: Shoe;
}

export default function ShoeCard({ shoe }: ShoeCardProps) {
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const discount = shoe.originalPrice
    ? Math.round((1 - shoe.price / shoe.originalPrice) * 100)
    : null;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  return (
    <div className="card-lift bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group">
      {/* Image */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <Image
          src={shoe.images[0]}
          alt={shoe.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />

        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5">
          {shoe.isNew && (
            <span className="bg-orange-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">
              جديد
            </span>
          )}
          {discount && (
            <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
              -{discount}%
            </span>
          )}
          {shoe.isTrending && (
            <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
              <Zap size={8} className="fill-orange-400 stroke-orange-400" /> تريند
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 left-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
          aria-label="أضف للمفضلة"
        >
          <Heart
            size={16}
            className={liked ? "fill-red-500 stroke-red-500" : "stroke-gray-400"}
          />
        </button>

        {/* Quick add - hover overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToCart}
            className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all ${
              addedToCart
                ? "bg-green-500 text-white"
                : "bg-slate-900 text-white hover:bg-orange-500"
            }`}
          >
            {addedToCart ? "✓ تمت الإضافة!" : "أضف للسلة"}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-1">
          {shoe.brand}
        </div>
        <Link href={`/products/${shoe.id}`}>
          <h3 className="font-bold text-gray-900 hover:text-orange-500 transition-colors leading-snug mb-2">
            {shoe.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={12}
                className={
                  s <= Math.round(shoe.rating)
                    ? "fill-amber-400 stroke-amber-400"
                    : "stroke-gray-200"
                }
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({shoe.reviews})</span>
        </div>

        {/* Colors */}
        <div className="flex gap-1.5 mb-3">
          {shoe.colors.map((color) => (
            <div
              key={color}
              className="w-4 h-4 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-200 cursor-pointer hover:scale-125 transition-transform"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Price + Cart */}
        <div className="flex items-center justify-between">
          <div>
            <div className="font-black text-gray-900 text-base">
              {formatPrice(shoe.price)}
            </div>
            {shoe.originalPrice && (
              <div className="text-xs text-gray-400 line-through">
                {formatPrice(shoe.originalPrice)}
              </div>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="w-9 h-9 bg-orange-500 hover:bg-orange-600 text-white rounded-xl flex items-center justify-center transition-colors shadow-sm"
            aria-label="أضف للسلة"
          >
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

