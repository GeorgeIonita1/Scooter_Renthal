import { phoneNumber } from "@/lib/utils";
import { CalendarClock, Contact, MapPin } from "lucide-react";
import { Separator } from "../ui/separator";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="container">
                <div className="py-16">
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
                <div className="py-16 grid sm:grid-cols-2 max-sm:gap-10">
                    <div>
                        <h3>Everest</h3>
                        <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Non dolores quidem iure et cumque cupiditate laboriosam nobis culpa sapiente. Nobis?
                        </p>
                    </div>
                    <div className="sm:flex sm:flex-col sm:items-center gap-6">
                        <h4>Quick links</h4>
                        <ul>
                            <li>FAQ</li>
                            <li>Contect</li>
                            <li>Services</li>
                            <li>How we work</li>
                        </ul>
                    </div>
                </div>

                <Separator />
                <div className="py-2">
                    <span>2024 Everest. All rights reserved</span>
                </div>
            </div>
        </footer>
    );
}
