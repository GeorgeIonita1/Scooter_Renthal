import Image from "next/image";

import { Button } from "../ui/button";
import { phoneNumber } from "@/lib/utils";

export default function HeroBanner() {
    return (
        <div className="bg-black">
            <div className="container grid md:grid-cols-2">
                <div className="max-md:order-1">
                    <Image alt="Person on scooter" src='/hero_scooter.jpg' width={1400} height={700} />
                </div>
                <div className="text-white flex flex-col justify-center items-start gap-12 max-md:text-center max-md:items-center max-md:pt-12">
                    <h1>Scooter renthal</h1>
                    <h4>Get your scooter today and start your career</h4>
                    <a href={`tel:${phoneNumber}`}>
                        <Button variant='outline' className="bg-black p-6">BOOK NOW</Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
