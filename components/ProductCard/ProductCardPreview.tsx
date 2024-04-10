import Image from "next/image";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { phoneNumber } from "@/lib/utils";

export default function ProductCardPreview() {
    return (
        <Card className="p-12">
            <CardHeader>
                <Image alt="scooter image" src='/scooter.png' width={600} height={600} />
                <CardTitle>Piaggio Liberty 120</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem iure,
                    vel quae dolorem rerum omnis obcaecati numquam ipsum doloremque.
                </p>
                <span className="block text-3xl mt-6">180$/hour</span>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
                <a className="block w-full" href={`tel:${phoneNumber}`}>
                    <Button className="w-full py-8 bg-black text-white" variant='outline'>BOOK NOW</Button>
                </a>
                <Button className="w-full py-8" variant='outline'>DETAILS</Button>
            </CardFooter>
        </Card>
    );
}
