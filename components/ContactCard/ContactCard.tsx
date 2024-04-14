import Image from "next/image";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Mail, Phone } from "lucide-react";
import { phoneNumber } from "@/lib/utils";

export default function ContactCard() {
    return (
        <Card className="text-center">
            <CardHeader className="flex flex-row justify-center">
                <Image
                    alt="Portrait image" src='/portrait.jpg' width={150} height={150}
                    className="rounded-full aspect-square object-cover object-top"
                />
            </CardHeader>
            <CardContent>
                <h3>Dinu Armand-Valentin</h3>
                <h4>CEO</h4>
                <div className="mt-6 flex gap-6 max-sm:flex-col">
                    <Button className="grow py-6"><Phone /></Button>
                    <Button className="grow py-6"><Mail /></Button>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between max-sm:flex-col">
                <span>{phoneNumber}</span>
                <span>email@youremail.com</span>
            </CardFooter>
        </Card>
    );
}
