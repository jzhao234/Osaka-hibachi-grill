"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex items-center pt-5 pb-5 bg-white text-black">
            <Link href={"/"}>
                <Image
                    src={"/logos/logo-main-red.png"}
                    alt="logo"
                    width={200}
                    height={200}
                    priority
                    className="pl-10"
                />
            </Link>
            
            <Link href={"/"} className="pl-10 font-semibold"> Home </Link>
            <Link href={"/menu"} className="pl-5 font-semibold"> Menu </Link>            
        </nav>
    )
}
