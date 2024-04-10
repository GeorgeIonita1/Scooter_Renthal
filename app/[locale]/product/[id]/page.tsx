import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { phoneNumber } from "@/lib/utils";

export default function Page() {
    return (
        <main className="container py-16">
            <div className="grid md:grid-cols-12 gap-6">
                <div className="col-span-7">
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
                </div>
                <div className="col-span-5">
                    <h2>Piaggio strada 340</h2>
                    <div className="flex flex-wrap gap-3 mt-4">
                        {['RCA', 'Echipament', 'Casca', 'Suport', 'Transport', 'Benzina', '50CC'].map(e => (
                            <Badge variant='outline' className="text-base rounded px-6 py-2 border-[1px]">{e}</Badge>
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
            </div>
        </main>
    );
}
