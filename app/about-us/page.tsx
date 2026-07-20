import type { Metadata } from "next";
import Image from 'next/image'
export const metadata: Metadata = {
    title: "about us ",
    description: "Stella is a store for clothes",
};



export default function AboutUs() {

    return (
        <div>
            <div>About Us </div>
            <Image
                src="https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="blackHole"
                width={100}
                height={200}
                loading="lazy"
            />
        </div>
    )
}