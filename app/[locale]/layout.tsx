import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Everest Renthal",
    description: "Rent scooters",
};

export default function RootLayout({
    children,
    params: { locale }
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <Header locale={locale} />
                {children}
                <Footer />
            </body>
        </html>
    );
}
