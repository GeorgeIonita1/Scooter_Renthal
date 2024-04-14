import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import ContactCard from "../ContactCard/ContactCard";

export default function ProductCardPreview() {
    return (
        <Card className="p-4">
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
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="w-full py-8 bg-black text-white" variant='outline'>CONTACT</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg p-8">
                        <ContactCard />
                    </DialogContent>
                </Dialog>
                <Link href='/en/product/3' className="block w-full">
                    <Button className="w-full py-8" variant='outline'>DETAILS</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
