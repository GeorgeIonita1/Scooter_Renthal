import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

import { Separator } from "../ui/separator";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { phoneNumber } from "@/lib/utils";

export default function Header() {
    return (
        <header>
            <div className="max-sm:hidden bg-black text-white">
                <div className="container flex justify-end gap-4 px-12 py-2">
                    <a href={`tel:${phoneNumber}`} className="flex items-center gap-2">
                        <Phone />
                        <span>{phoneNumber}</span>
                    </a>
                    <Separator orientation="vertical" className="h-full" />
                    <div className="flex items-center gap-2">
                        <MapPin />
                        <span>Drumul taberei</span>
                    </div>
                </div>
            </div>
            <div className="container flex justify-between">
                <Button className="py-8 block sm:flex" variant='link'>
                    <Link href='/'>Everest</Link>
                </Button>
                <nav className="max-sm:hidden">
                    <ul className="flex">
                        <li><Button className="py-8" variant='link'><Link href='/'>Home</Link></Button></li>
                        <li><Button className="py-8" variant='link'><Link href='/'>Terms and conditions</Link></Button></li>
                        <li><Button className="py-8" variant='link'><Link href='/'>Contact</Link></Button></li>
                    </ul>
                </nav>
                <div className="sm:hidden">
                    <Sheet>
                        <SheetTrigger className="py-8">Menu</SheetTrigger>
                        <SheetContent>
                            <nav>
                                <ul className="">
                                    <li><SheetClose asChild><Link href='/'>Home</Link></SheetClose></li>
                                    <li><SheetClose asChild><Link href='/'>Terms and conditions</Link></SheetClose></li>
                                    <li><SheetClose asChild><Link href='/'>Contact</Link></SheetClose></li>
                                </ul>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
