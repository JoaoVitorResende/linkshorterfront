import { useState } from "react"

interface OutputLinkProps {
    shortLink: string
}

export const OutputLink = ({ shortLink }: OutputLinkProps) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shortLink)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy:", err)
        }
    }

    if (!shortLink) return null

    return (
        <div className="flex items-center justify-between gap-3 w-full max-w-md rounded-full border-2 border-white/70 bg-white/20 backdrop-blur-sm px-6 py-3">
            <a
                href={shortLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium truncate hover:underline"
            >
                {shortLink}
            </a>

            <button
                onClick={handleCopy}
                className="flex items-center gap-1 shrink-0 bg-white text-blue-400 font-bold text-sm px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
                {copied ? (
                    <>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Copied
                    </>
                ) : (
                    <>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Copy
                    </>
                )}
            </button>
        </div>
    )
}
