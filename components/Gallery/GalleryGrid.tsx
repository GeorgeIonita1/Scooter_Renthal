'use client'

import { useState } from "react";
import Image from "next/image";
import { Close } from "@radix-ui/react-dialog";

import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Separator } from "../ui/separator";

const myData = ['/beach_scooter.jpg', '/hero_scooter.jpg', '/portrait.jpg', '/street_scooter.jpg',
    '/beach_scooter.jpg', '/hero_scooter.jpg', '/portrait.jpg', '/street_scooter.jpg'];

export default function GalleryGrid() {
    const [isOpen, setIsOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);

    const handleSetStartIndex = (i: number) => {
        setStartIndex(i)
        setIsOpen(prev => !prev);
    }

    return (
        <section>
            <h2>Gallery</h2>
            <Separator className="mt-4 mb-16" />
            <Dialog open={isOpen}>
                <DialogTrigger asChild>
                    <div className="gallery-container">
                        {myData.map((e, i) => (
                            <div className="overflow-hidden" onClick={() => handleSetStartIndex(i)}>
                                <Image key={i} className="object-cover !relative object-center hover:scale-[1.02] ease-in duration-200" alt="Scooter image" src={e} fill />
                            </div>
                        ))}
                    </div>
                </DialogTrigger>
                <DialogContent className="dialog-reset-close-btn">
                    <Carousel
                        className="w-full"
                        opts={{
                            startIndex: startIndex
                        }}
                    >
                        <CarouselContent className="pt-2">
                            {myData.map((e, i) => (
                                <CarouselItem key={i}>
                                    <Image alt='Scooter image' width={500} height={600} src={e} className="aspect-square object-cover mx-auto" />
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
        </section>
    );
}
