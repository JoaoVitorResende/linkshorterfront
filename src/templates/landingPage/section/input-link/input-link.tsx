"use client"

import { useState } from "react"

interface InputLinkProps {
    onShorten: (shortLink: string) => void
}

export const InputLink = ({ onShorten }: InputLinkProps) => {
    const [url, setUrl] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const response = await fetch("http://localhost:8080/api/shorten", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url }),
        })
        const data = await response.json()
        onShorten(`http://localhost:8080/${data.data}`)
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-3 w-full max-w-md">
            <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Input link here"
                className="rounded-full border-2 border-white/70 bg-white/20 px-6 py-3 text-white placeholder-white/70 outline-none flex-1"
            />
            <button type="submit" className="bg-white text-blue-400 font-bold px-6 py-3 rounded-full">
                Shorten
            </button>
        </form>
    )
}