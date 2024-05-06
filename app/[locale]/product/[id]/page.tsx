import Image from "next/image";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { phoneNumber } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import SpotlightBanner from "@/components/Banner/SpotlightBanner";

export default function Page() {
    return (
        <main className="container pt-[120px] sm:pt-[136px]">
            <div className="grid md:grid-cols-12 gap-6">
                <div className="col-span-7">
                    <Dialog>
                        <DialogTrigger>
                            <div>
                                <Image alt="Scooter image" src='/scooter.png' width={600} height={600} />
                            </div>
                            <div className="grid grid-cols-3">
                                {['/scooter.png', '/scooter.png', '/scooter.png'].map(el => (
                                    <div>
                                        <Image alt="scooter image" src={el} width={300} height={300} />
                                    </div>
                                ))}
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <Carousel className="w-full">
                                <CarouselContent>
                                    {['/scooter.png', '/scooter.png', '/scooter.png'].map((el, idx) => (
                                        <CarouselItem key={idx}>
                                            <Image alt="Scooter image" width={500} height={500} src={el} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="left-0" />
                                <CarouselNext className="right-0" />
                            </Carousel>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="col-span-7 md:col-span-5">
                    <h2>Piaggio strada 340</h2>
                    <div className="flex flex-wrap gap-3 mt-4">
                        {['RCA', 'Echipament', 'Casca', 'Suport', 'Transport', 'Benzina', '50CC'].map((e, idx) => (
                            <Badge key={idx} variant='outline' className="text-base rounded px-6 py-2 border-[1px]">{e}</Badge>
                        ))}
                    </div>

                    <div className="py-10">
                        <h3>Prices</h3>
                        <div className="flex flex-col gap-4 mt-4">
                            <div>
                                <strong className="text-4xl font-normal">250 <span className="text-base">LEI / WEEK</span></strong>
                                <Separator className="mt-4" />
                            </div>
                            <div>
                                <strong className="text-4xl font-normal">900 <span className="text-base">LEI / MONTH</span></strong>
                                <Separator className="mt-4" />
                            </div>
                        </div>
                    </div>

                    <a href={`tel:${phoneNumber}`} className="block mt-6">
                        <Button variant='outline' className="p-6 bg-black text-white">BOOK NOW</Button>
                    </a>
                </div>

                <section className="col-span-7 flex flex-col gap-4">
                    <h2>Scooter overview</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque obcaecati possimus aut
                        incidunt quod repellendus aperiam, aspernatur sint exercitationem!
                    </p>
                    <div className="grid grid-cols-2 max-w-md">
                        {
                            ['text', 'textfd40', 'fsgdrg433', 'fegsegsdt egse', 'fsdg 43f dw4', 'dfgzsrg'].map((el, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <Check />
                                    <span>{el}</span>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
            <SpotlightBanner />
        </main>
    );
}
