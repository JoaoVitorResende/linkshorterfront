"use client"
import Image from "next/image"
import { InputLink } from "../input-link/input-link"
import { OutputLink } from "../output-link/output-link "
import { useState } from "react"

export const Explanation = () => {
    const [shortLink, setShortLink] = useState("")
    return (
        <section className="relative py-24">
            <div className="absolute inset-0 hidden md:block bg-[url('/backgroundFooter.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

            <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-cyan-300 w-fit rounded-full">
            </div>

            <div className="container relative mx-auto px-4">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className=" flex items-center gap-10 text-center">
                        <h2 className={`text-balance text-center text-heading-xl text-white font-sans`}>
                            Input a simple link and see convert to a new one but shorter..
                        </h2>
                        <Image src="/logo.png" alt="mascot" width={116} height={32} />
                    </div>
                    <InputLink onShorten={(link) => setShortLink(link)} />
                    <OutputLink shortLink={shortLink} />
                </div>
            </div>
        </section>
    )
}