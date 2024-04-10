import { phoneNumber } from "@/lib/utils";
import { CalendarClock, Contact, MapPin } from "lucide-react";
import { Separator } from "../ui/separator";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-16">
            <div className="container">
                <div className="pb-8">
                    <div className="grid gap-y-8 sm:grid-cols-2 md:grid-cols-3">
                        <div className="flex gap-2 items-center">
                            <MapPin size={46} />
                            <div className="flex flex-col">
                                <span>Drumul Taberei</span>
                                <span>50</span>
                            </div>
                        </div>
                        <div className="flex gap-2 sm:justify-center items-center">
                            <Contact size={46} />
                            <div className="flex flex-col">
                                <span>Phone: {phoneNumber}</span>
                                <span>Email: email@mail.com</span>
                            </div>
                        </div>
                        <div className="flex gap-2 md:justify-end items-center">
                            <CalendarClock size={46} />
                            <div className="flex flex-col">
                                <span>Mon-Fri: 08:00 - 18:00</span>
                                <span>Sat-Sun: Closed</span>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />

            </div>
        </footer>
    );
}
