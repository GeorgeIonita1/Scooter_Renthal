'use client'

import Image from "next/image";
import { useState } from "react";

import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Close } from "@radix-ui/react-dialog";

export default function ProductDetailGallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    console.log(startIndex)

    const handleSetStartIndex = (i: number) => {
        console.log('clicked');
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
            <DialogContent>
                <Carousel
                    className="w-full"
                    opts={{
                        startIndex: startIndex
                    }}
                >
                    <CarouselContent>
                        {['/street_scooter.jpg', '/scooter.png', '/beach_scooter.jpg', '/hero_scooter.jpg'].map((el, idx) => (
                            <CarouselItem key={idx}>
                                <Image alt="Scooter image" width={500} height={500} src={el} className="aspect-square object-cover" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-0" />
                    <CarouselNext className="right-0" />
                    <Close onClick={() => setIsOpen(false)}>close</Close>
                </Carousel>
            </DialogContent>
        </Dialog>
    );
}
