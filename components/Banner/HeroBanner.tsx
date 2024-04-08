import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroBanner() {
    return (
        <div className="bg-black">
            <div className="container grid grid-cols-2">
                <div className="">
                    <Image alt="Person on scooter" src='/hero_scooter.jpg' width={1400} height={700} />
                </div>
                <div className="text-white flex flex-col justify-center gap-12">
                    <h1>Scooter renthal</h1>
                    <h4>Get your scooter today and start your career</h4>
                    <div className="flex items-end gap-[11rem]">
                        <h3>Let's<br /> collaborate</h3>
                        <Button variant='outline' className="bg-black p-6">BOOK NOW</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
