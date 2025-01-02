import type { Metadata } from "next";
import Header from "@/components/header";
import SocialMedia from "@/components/social-media";
import "./globals.css";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="@class:body">
                <Header />
                <SocialMedia />
                <div className="@class:flexCenterBox">{children}</div>
            </body>
        </html>
    );
}
