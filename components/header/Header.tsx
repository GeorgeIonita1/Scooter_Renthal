'use client'

import { MapPin, Phone } from "lucide-react";

import { Link, useRouter, usePathname } from "@/navigation";
import { Separator } from "../ui/separator";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { phoneNumber } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function Header({ locale }: { locale: string }) {
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
                    <ul className="flex items-center">
                        <li><Button className="py-8" variant='link'><Link href='/'>Home</Link></Button></li>
                        <li><Button className="py-8" variant='link'><Link href='/'>Terms and conditions</Link></Button></li>
                        <li><Button className="py-8" variant='link'><Link href='/'>Contact</Link></Button></li>
                        <li><LanguageSelector locale={locale} /></li>
                    </ul>
                </nav>
                <div className="sm:hidden">
                    <Sheet modal={true}>
                        <SheetTrigger className="py-8">Menu</SheetTrigger>
                        <SheetContent>
                            <nav className="mt-8">
                                <ul>
                                    <li><LanguageSelector locale={locale} /></li>
                                    <li className="mt-[6rem]"><SheetClose asChild><Link href='/'>Home</Link></SheetClose></li>
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

function LanguageSelector({ locale }: { locale: string }) {
    const pathname = usePathname()
    const router = useRouter();

    return (
        <Select defaultValue={locale} onValueChange={e => router.replace(pathname, { locale: e })}>
            <SelectTrigger>
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ro">Romana</SelectItem>
            </SelectContent>
        </Select>
    );
}
