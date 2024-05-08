'use client'

import Image from "next/image";
import { useState } from "react";

import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Close } from "@radix-ui/react-dialog";

export default function ProductDetailGallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);

    const handleSetStartIndex = (i: number) => {
        setStartIndex(i)
        setIsOpen(prev => !prev);
    }

    return (
        <Dialog open={isOpen}>
            <DialogTrigger asChild>
                <div className="product-detail-gallery grid grid-cols-12 gap-2">
                    {['/street_scooter.jpg', '/scooter.png', '/beach_scooter.jpg', '/hero_scooter.jpg'].map((el, i) => (
                        <div onClick={() => handleSetStartIndex(i)}>
                            <Image alt="scooter image" fill src={el} className="aspect-square object-cover !relative" />
                        </div>
                    ))}
                </div>
            </DialogTrigger>
            <DialogContent className="dialog-product-gallery">
                <Carousel
                    className="w-full"
                    opts={{
                        startIndex: startIndex
                    }}
                >
                    <CarouselContent className="pt-2">
                        {['/street_scooter.jpg', '/scooter.png', '/beach_scooter.jpg', '/hero_scooter.jpg'].map((el, idx) => (
                            <CarouselItem key={idx}>
                                <Image alt="Scooter image" width={500} height={500} src={el} className="aspect-square object-cover" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-0" />
                    <CarouselNext className="right-0" />
                    <Close onClick={() => setIsOpen(false)} className="absolute right-0 -top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500 dark:ring-offset-gray-950 dark:focus:ring-gray-300 dark:data-[state=open]:bg-gray-800 dark:data-[state=open]:text-gray-400">
                        X
                    </Close>
                </Carousel>
            </DialogContent>
        </Dialog>
    );
}
