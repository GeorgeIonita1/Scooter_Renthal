import Image from "next/image";

import { Button } from "../ui/button";
import { phoneNumber } from "@/lib/utils";

export default function SpotlightBanner() {
    return (
        <section className="md:grid grid-cols-12 gap-6">
            <div className="col-span-5 flex flex-col gap-6 justify-center items-start">
                <h2>Our satisfied clients all around the globe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, voluptates?</p>
                <div className="flex justify-between w-full">
                    <div className="flex flex-wrap">
                        <span className="text-5xl">21</span><span className="text-base self-start">+</span>
                        <span className="basis-full">Years of experience</span>
                    </div>
                    <div className="flex flex-wrap">
                        <span className="text-5xl">157</span><span className="text-base self-start">K</span>
                        <span className="basis-full">Satisfied clients</span>
                    </div>
                </div>
                <a href={`tel:${phoneNumber}`}>
                    <Button className="bg-black text-white p-6 mt-4" variant='outline'>BOOK NOW</Button>
                </a>
            </div>
            <div className="grid col-span-7 justify-center sm:grid-cols-2 gap-4 max-md:mt-16">
                <Image alt="Scooter on a beach" src='/beach_scooter.jpg' width={400} height={700} />
                <Image alt="Scooter on a street" src='/street_scooter.jpg' width={400} height={700} />
            </div>
        </section>
    );
}
