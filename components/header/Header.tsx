import Link from "next/link";
import { Separator } from "../ui/separator";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

export default function Header() {
    return (
        <header>
            <div className="max-sm:hidden bg-black text-white">
                <div className="container flex justify-end gap-4">
                    <div>+40.123.456.789</div>
                    <Separator orientation="vertical" className="h-full" />
                    <div>Drumul taberei</div>
                </div>
            </div>
            <div className="container flex justify-between">
                <Button className="p-8" variant='link'>
                    <Link href='/'>Everest</Link>
                </Button>
                <nav className="max-sm:hidden">
                    <ul className="flex">
                        <li><Button className="p-8" variant='link'><Link href='/'>Home</Link></Button></li>
                        <li><Button className="p-8" variant='link'><Link href='/'>Terms and conditions</Link></Button></li>
                        <li><Button className="p-8" variant='link'><Link href='/'>Contact</Link></Button></li>
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
