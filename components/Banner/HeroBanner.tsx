import Image from "next/image";

export default function HeroBanner() {
    return (
        <div className="bg-black">
            <div className="container grid grid-cols-2">
                <div className="">
                    <Image alt="Person on scooter" src='/hero_scooter.jpg' width={1400} height={700} />
                </div>
                <div className="text-white">
                    <h1>Scooter renthal</h1>
                    <h4>Get your scooter today and start your career</h4>
                    <h3>Let's<br /> collaborate</h3>
                    <button>BOOK NOW</button>
                </div>
            </div>
        </div>
    );
}
