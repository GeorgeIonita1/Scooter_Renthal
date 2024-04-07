import Link from "next/link";
import { Separator } from "../ui/separator";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

export default function Header() {
    return (
        <header>
            <div className="max-sm:hidden flex justify-end gap-4 bg-black text-white">
                <div>+40.123.456.789</div>
                <Separator orientation="vertical" className="h-full" />
                <div>Drumul taberei</div>
            </div>
            <div className="container flex justify-between">
                <Link href='/'>Everest</Link>
                <nav className="max-sm:hidden">
                    <ul className="flex gap-12">
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/'>Terms and conditions</Link></li>
                        <li><Link href='/'>Contact</Link></li>
                    </ul>
                </nav>
                <div className="sm:hidden">
                    <Sheet>
                        <SheetTrigger>Menu</SheetTrigger>
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
